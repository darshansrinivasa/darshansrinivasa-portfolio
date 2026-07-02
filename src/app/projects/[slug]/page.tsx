import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  return (
    <PagePlaceholder
      title={`Project: ${slug}`}
      phase="Phase 4"
    />
  );
}
