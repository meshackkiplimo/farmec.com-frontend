import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
  status:string
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "Placed", value: "placed", progressValue: 0,status:"not taken" },
  {
    label: "Awaiting Rent Confirmation",
    value: "paid",
    progressValue: 25,
    status:"not taken"
  },
  { label: "In Progress", value: "inProgress", progressValue: 50 ,status:"not taken"},
  { label: "Out for Delivery", value: "outForDelivery", progressValue: 75,status:"not taken" },
  { label: "Delivered", value: "delivered", progressValue: 100 ,status:"not taken"},
];