const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "https://foodxbe-production.up.railway.app/api",
  timeout: 10000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json", // Set default content type
    Accept: "application/json",
  },
});

// Adding a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // You can add authentication tokens here if needed
    // For example: config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Adding a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(" Error response", error.response);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error request", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error", error.message);
    }
    return Promise.reject(error);
  }
);

// Auth

const register = (data) => {
  return axiosClient.post("/auth/register", data);
};

const login = (data) => {
  return axiosClient.post("/auth/login", data);
};

const logout = (token) => {
  return axiosClient.post(
    "/auth/logout",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const refreshToken = (token) => {
  return axiosClient.post(
    "/auth/refresh",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//user

const getMyInfo = (token) => {
  return axiosClient.get("/users/myInfo", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getProfile = (userId) => {
  return axiosClient.get("/users/" + userId);
};

const updateProfile = (id, data, token) => {
  return axiosClient.post("/users/" + id, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const searchUsers = (data)=>{
  return axiosClient.get("users/specification",data);
}

//restaurant

const getNearbyRestaurant = (data) => {
  return axiosClient.post("/restaurants/nearby",data);
};

const getRestaurants = (data)=>{
  return axiosClient.post("/restaurants/specification",data);
}

const getRestaurantById = (id)=>{
  return axiosClient.get("/restaurants/"+id);
}

//review

const postReview = (data,token)=>{
  return axiosClient.post("/reviews",data,{
    headers: {
      Authorization: `Bearer ${token}`,
      
    },
  })
}

const getReviewById = (data)=>{
  //datatype
  // {
  //   "searchRequestDTO": [
  //     {
  //       "column": "string",
  //       "value": "string",
  //       "operation": "EQUAL"
  //     }
  //   ],
  //   "pageRequestDTO": {
  //     "pageNo": 0,
  //     "pageSize": 0
  //   },
  //   "sort": "ASC",
  //   "sortByColumn": "string"
  // }

  return axiosClient.post("/reviews/specification",data)
}

const getRecentReviews = ()=>{
  return axiosClient.get("reviews/recent");
}


//utilities


const getOpeningTime = (restaurantId)=>{
  return axiosClient.get("/opentimes/"+restaurantId);
}


module.exports = {
  register,
  login,
  logout,
  getMyInfo,
  refreshToken,
  getProfile,
  searchUsers,
  updateProfile,
  getNearbyRestaurant,
  getRestaurants,
  getRestaurantById,
  postReview,
  getReviewById,
  getRecentReviews,
  getOpeningTime,
};
