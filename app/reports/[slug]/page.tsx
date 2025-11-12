import { getReportBySlug, getAllReports } from "@/sanity";
import { ReportDetailsWrapper } from "@/components/reports/ReportDetailsWrapper";
import { notFound } from "next/navigation";

interface ReportDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ReportDetailPage({ params }: ReportDetailPageProps) {
  const { slug } = await params;
  const report = await getReportBySlug(slug);

  if (!report) {
    notFound();
  }

  const allReports = await getAllReports();
  const otherReports = allReports.filter((r) => r._id !== report._id).slice(0, 3);

  return <ReportDetailsWrapper report={report} otherReports={otherReports} />;
}

export async function generateStaticParams() {
  const reports = await getAllReports();
  return reports.map((report) => ({
    slug: report.slug.current,
  }));
}

export const revalidate = 60;
