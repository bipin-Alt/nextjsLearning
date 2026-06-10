import { Button } from "@/components/ui/button";
import CommonInput from "../commonInput/commonInput";
import { handleLogin } from "@/app/actions/serverActions";

function CommonForm({ formData = [], buttonText }) {
  function HandleFormDistribution({ currentFormData }) {
    let data;
    switch (currentFormData.componentType) {
      case "input":
        data = (
          <CommonInput
            placeholder={currentFormData.placeholder}
            type={currentFormData.type}
            name={currentFormData.name}
            label={currentFormData.label}
            showForgotPassword={currentFormData.showForgotPassword}
          />
        );
        break;
      default:
        data = (
          <CommonInput
            placeholder={currentFormData.placeholder}
            type={currentFormData.type}
            name={currentFormData.name}
            label={currentFormData.label}
            showForgotPassword={currentFormData.showForgotPassword}
          />
        );
        break;
    }
    return data;
  }

  return (
    <form className="space-y-4" action={handleLogin}>
      <div className="space-y-3">
        {formData.map((data) => (
          <div key={data.id}>
            <HandleFormDistribution currentFormData={data} />
          </div>
        ))}
      </div>
      <Button type="submit" className="w-full cursor-pointer font-semibold py-2">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
