import { Layout } from "antd";
import Headers from "../components/Headers";
import Contents from "../components/Contents";
export default function Router() {
    return (
     <Layout>
        <Headers />
        <Contents />
     </Layout>
    );
  }