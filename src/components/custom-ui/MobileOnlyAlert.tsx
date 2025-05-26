import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export default function MobileOnlyAlert({ className }: { className?: string }) {
  return (
    <Alert
      className={cn(
        "bg-yellow-50 border-yellow-400 text-yellow-900 w-[94%] mx-auto mt-8",
        className
      )}
    >
      <AlertDescription className="text-base mt-1">
        Lưu ý: Do hạn chế về thời gian, em hiện chưa kịp tối ưu giao diện cho
        các thiết bị di động và tablet. Nếu anh/chị tuyển dụng cần em hoàn thiện
        thêm phần responsive, em rất sẵn sàng thực hiện khi được cấp thêm thời
        gian. Anh/chị có thể liên hệ với em qua email để em bổ sung sớm nhất. Em
        xin chân thành cảm ơn!
        <a
          href="mailto:khangdev171998@gmail.com"
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          khangdev171998@gmail.com
        </a>
      </AlertDescription>
    </Alert>
  );
}
