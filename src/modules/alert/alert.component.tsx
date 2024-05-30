import {
  EarthIcon,
  TriangleAlertIcon,
  CheckCircleIcon,
  InfoIcon,
  CircleUserIcon,
  XCircleIcon,
  
} from "lucide-react";
 
import {
  Alert as AlertUI,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export const Alert = () => {
  return (
    <div className="grid gap-3">
      <AlertUI>
        <EarthIcon className="h-4 w-4" />
        <AlertTitle>Alert 1</AlertTitle>
        <AlertDescription>
          This is the default alert
        </AlertDescription>
      </AlertUI>

      <AlertUI variant="primary">
        <CircleUserIcon className="h-4 w-4" />
        <AlertTitle>Logged In</AlertTitle>
        <AlertDescription>
          Welcome back Cornelius !
        </AlertDescription>
      </AlertUI>

      <AlertUI variant="success">
        <CheckCircleIcon className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          The article was saved successfully !
        </AlertDescription>
      </AlertUI>

      <AlertUI variant="warning">
        <TriangleAlertIcon className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Careful this action is irreversible !
        </AlertDescription>
      </AlertUI>

      <AlertUI variant="info">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          This is just an information.
        </AlertDescription>
      </AlertUI>

      <AlertUI variant="destructive">
        <XCircleIcon className="h-4 w-4" />
        <AlertTitle>Deleted</AlertTitle>
        <AlertDescription>
          This resource has been deleted !
        </AlertDescription>
      </AlertUI>
    </div>
  );
};
