import { WorksList } from "@/components/pages/works/WorksList";
import { getWorks } from "@/libs/microCMS/getWorks";

const Works = async () => {
  const res = await getWorks();
  if (res.status === 200) {
    console.log("🍊");
  } else {
    // エラー
    console.log("💣");
  }

  return <WorksList data={res.data.contents} />;
};

export default Works;
