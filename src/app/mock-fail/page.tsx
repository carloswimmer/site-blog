import { MockFail } from "@/templates/mock-fail";

export const dynamic = "force-dynamic";

/** Page to simulate loading and error states on server component */
export default function MockFailPage() {
  return <MockFail />;
}
