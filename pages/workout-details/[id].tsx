import { WorkoutDetails } from "../../molecules";
import Layout from "../../layouts/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const { id, referrer } = router.query;

  return (
    <Layout
      title="Workout detail"
      topBarLinks={
        <Link href={String(referrer) ?? "/"}>
          <a>Back to workouts</a>
        </Link>
      }
    >
      <WorkoutDetails id={String(id)} />
    </Layout>
  );
}
