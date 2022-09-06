import * as Yup from "yup";

export const fundWalletFields = {
  amount: "",
  description: "",
};

export const FundWalletSchema = Yup.object().shape({
  amount: Yup.number().typeError("Only digit(s) is allowed").required("The amount field is required"),
  description: Yup.string().required("Description field is a required"),
});
