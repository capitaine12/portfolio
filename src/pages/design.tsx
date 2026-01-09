import SideTitle from '@/components/layout/SideTitle';
import DesignGrid from '@/components/design/DesignGrid';

export default function DesignPage() {
  return (
    <section className="relative min-h-screen bg-white px-6 lg:px-24 py-16">
      <SideTitle text="DESIGN" />

      <DesignGrid />
    </section>
  );
}
