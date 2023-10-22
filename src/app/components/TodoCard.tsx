import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TodoCard() {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>Create Todo</CardTitle>
        <CardDescription>Let's go.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input id="name" placeholder="your task title" />
            </div>
            <div className="flex flex-col space-y-4">
              <Label htmlFor="dotime">Do Time</Label>
              <div className="flex items-center gap-6">
                <div className="flex items-baseline gap-2">
                  <Input
                    id="dotime"
                    type="number"
                    placeholder="0~24"
                    className="w-[80px]"
                    defaultValue={0}
                  />
                  <span>hour</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <Input
                    id="dotime"
                    type="number"
                    placeholder="0~59"
                    className="w-[80px]"
                    defaultValue={0}
                  />
                  <span>min</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <Input
                    id="dotime"
                    type="number"
                    placeholder="0~59"
                    className="w-[80px]"
                    defaultValue={0}
                  />
                  <span>sec</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex  flex-row-reverse">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button>Do it</Button>
      </CardFooter>
    </Card>
  );
}
export default TodoCard;
