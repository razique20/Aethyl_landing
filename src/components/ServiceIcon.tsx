import { LayoutDashboard, Users, Smartphone, Workflow } from "lucide-react";
import type { ServiceIconKey } from "@/data/services";

const icons = {
  dashboard: LayoutDashboard,
  crm: Users,
  mobile: Smartphone,
  automation: Workflow,
} as const;

export default function ServiceIcon({
  name,
  className = "w-5 h-5",
}: {
  name: ServiceIconKey;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
