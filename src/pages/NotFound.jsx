import { Button, Result } from "antd";
import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle={<span className="font-bold text-xl text-gray-400">این صفحه پیدا نشد!</span>}
      extra={
        <Button
          className="bg-blue-500"
          type="primary"
          onClick={() => navigate("/")}
        >
          صفحه اصلی
        </Button>
      }
    />
  );
};
export default NotFound;
