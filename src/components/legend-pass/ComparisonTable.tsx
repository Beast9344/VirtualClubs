
import { LEGEND_PASS_BENEFITS } from '@/lib/constants';
import { CheckCircle, XCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FloatingCard } from '@/components/ui/FloatingCard';

export function ComparisonTable() {
  // Assuming both arrays have the same length and corresponding benefits
  const benefitsCount = Math.max(LEGEND_PASS_BENEFITS.free.length, LEGEND_PASS_BENEFITS.legend.length);

  return (
    <FloatingCard className="overflow-x-auto p-0 md:p-2" hoverEffect="subtle">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[50%] sm:w-[60%] font-headline text-lg text-primary">Benefit</TableHead>
            <TableHead className="text-center font-headline text-lg text-muted-foreground">Free Tier</TableHead>
            <TableHead className="text-center font-headline text-lg text-accent">Legend Pass</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: benefitsCount }).map((_, index) => {
            const freeBenefit = LEGEND_PASS_BENEFITS.free[index];
            const legendBenefit = LEGEND_PASS_BENEFITS.legend[index];
            // Use legend benefit name as primary if free one doesn't exist for some reason (e.g. premium only feature)
            const benefitName = legendBenefit?.benefit || freeBenefit?.benefit;

            return (
              <TableRow key={benefitName || `benefit-${index}`} className="border-primary/10">
                <TableCell className="font-medium text-foreground/90">{benefitName}</TableCell>
                <TableCell className="text-center">
                  {freeBenefit?.included ? (
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500/70 mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {legendBenefit?.included ? (
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
