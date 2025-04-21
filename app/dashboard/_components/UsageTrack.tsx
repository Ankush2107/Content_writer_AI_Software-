import React from "react";

function UsageTrack() {
  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#8cb6ec] w-full  rounded-full mt-3">
            <div className="h-2 bg-white rounded-full"
                style={{
                    width: "50%"
                }}
            ></div>
        </div>
        <h2 className="text-sm my-2">350/10,000 Credit Used</h2>
      </div>
    </div>
  );
}
export default UsageTrack;
