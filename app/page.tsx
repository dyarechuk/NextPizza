import { Container, Title } from '@/components/shared';
import { Filters } from '@/components/shared/Filters';
import { TopBar } from '@/components/shared/TopBar';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Усі піцци" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-9">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex-flex-col gap-16">Список товарів</div>
          </div>
        </div>
      </Container>
    </>
  );
}
