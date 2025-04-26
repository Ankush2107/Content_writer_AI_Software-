'use client'
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useTotalUsage } from "@/app/(context)/TotalUsageContext";

interface AIOutput {
  id: string;
  ai_response: string;
  created_by: string;
}

function UsageTrack() {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useTotalUsage();
  const [usagePercentage, setUsagePercentage] = useState(0);
  const CREDIT_LIMIT = 10000;

  useEffect(() => {
    if (user?.emailAddresses?.[0]?.emailAddress) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    try {
      const supabase = createClientComponentClient();
      const { data, error } = await supabase
        .from("ai_output")
        .select("ai_response")
        .eq("created_by", user?.emailAddresses[0].emailAddress);

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      if (data) {
        const total = getTotalUsage(data as AIOutput[]);
        setTotalUsage(total);
        setUsagePercentage((total / CREDIT_LIMIT) * 100);
      }
    } catch (error) {
      console.error("Error in getData:", error);
    }
  };

  const getTotalUsage = (result: AIOutput[]) => {
    let total = 0;
    result.forEach((element) => {
      if (element.ai_response) {
        // Count words instead of characters
        const words = element.ai_response.split(/\s+/).filter(word => word.length > 0).length;
        total += words;
      }
    });
    return total;
  };

  return (
    <div className="m-5">
      <div className="bg-primary dark:bg-primary/80 text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#8cb6ec] dark:bg-[#8cb6ec]/80 w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(usagePercentage, 100)}%`,
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage.toLocaleString()}/{CREDIT_LIMIT.toLocaleString()} Credits Used</h2>
      </div>
      <Button variant={"secondary"} className="w-full my-5 text-primary">
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;

