import { Button, Divider, Input, InputNumber, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";

interface IStartPageProps {
  setShowPomodoro: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StartPage({ setShowPomodoro }: IStartPageProps) {
  const [affirmation, setAffirmation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://cryptic-headland-94862.herokuapp.com/https://zenquotes.io/api/today"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => setIsLoading(false));
  }, []);
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Let's focus!</h1>
        {isLoading ? (
          <Spin indicator={<LoadingOutlined spin />} size="small" />
        ) : (
          <p className="my-2">affirmation</p>
        )}
      </div>
      <Divider />
      <div>
        <p className="text-xs">Title</p>
        <Input placeholder="explain your goal" />
      </div>
      <div className="flex justify-between my-8">
        <div>
          <p className="text-xs">Pomodoro Timer</p>
          <InputNumber min={1} max={180} defaultValue={25} />
        </div>
        <div>
          <p className="text-xs">Short Break</p>
          <InputNumber min={1} max={20} defaultValue={5} />
        </div>
        <div>
          <p className="text-xs">Work Sessions</p>
          <InputNumber min={1} max={10} defaultValue={2} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <Button
          onClick={() => {
            setShowPomodoro(true);
          }}
        >
          LET'S GO!
        </Button>
      </div>
    </>
  );
}
