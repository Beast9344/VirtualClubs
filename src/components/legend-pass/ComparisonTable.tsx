import { LEGEND_PASS_BENEFITS } from '@/lib/constants';
import { CheckCircle, XCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FloatingCard } from '@/components/ui/FloatingCard';

export function ComparisonTable() {
  // Assuming both arrays have the same length and corresponding benefits
  const benefitsCount = LEGEND_PASS_BENEFITS.free.length;

  return (
    <FloatingCard className="overflow-x-auto p-0 md:p-2" hoverEffect="subtle">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[60%] font-headline text-lg text-primary">Benefit</TableHead>
            <TableHead className="text-center font-headline text-lg text-muted-foreground">Free Tier</TableHead>
            <TableHead className="text-center font-headline text-lg text-accent">Legend Pass</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: benefitsCount }).map((_, index) => {
            const freeBenefit = LEGEND_PASS_BENEFITS.free[index];
            const legendBenefit = LEGEND_PASS_BENEFITS.legend[index];
            return (
              <TableRow key={freeBenefit.benefit} className="border-primary/10">
                <TableCell className="font-medium text-foreground/90">{freeBenefit.benefit}</TableCell>
                <TableCell className="text-center">
                  {freeBenefit.included ? (
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500/70 mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {legendBenefit.included ? (
                    <CheckCircle className="h-6 w-6 text-accent mx-auto" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500/70 mx-auto" />
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </FloatingCard>
  );
}
