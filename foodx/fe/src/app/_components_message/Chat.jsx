import React from "react";
import { user_test,message_test } from "@/testData";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Message from "./Message";

function Chat() {
  return (
    <div className="h-full border-l-[2px]">
      <div className="flex justify-between items-center p-6 h-[10%] border-b-[2px]">
        <Image src={user_test[0].avatar_link} width={50} height={50} />
        <div className="font-bold text-2xl text-primary">
          {user_test[0].name}
        </div>
        <div>...</div>
      </div>
      <div className="flex flex-col h-[90%]">
        <div className="h-[85%]">
          <Message msg={message_test}/> 
        </div>
        <div className="h-[15%] border-t-[2px] p-4 flex items-center gap-4">
          <Input
            type="text"
            placeholder="Enter your message..."
            className=" w-[90%] h-[70%] text-lg"
          />
          <Button className="w-[7%] h-[60%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
