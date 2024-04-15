const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = 'AIzaSyCF__svPnNstW1B8BD_jdhGZZv_7RZOMgA';
import {NextResponse} from "next/server"

export async function GET(request){
    const {searchParams} = new URL(request.url);
    const category = searchParams.get("category");
    const radius = searchParams.get("radius");
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const res = await fetch(
        BASE_URL + "/textsearch/json/query="
        + category
        + "&location="+lat+","+lng
        +"&radius="+radius
        +"&key=" + GOOGLE_API_KEY,
        {
            headers:{
                "Content-Type":"application/json",
            },
        }
    )
    const results = await res.json();

    return NextResponse.json({results});
}