"use client";

import { Badge } from "@/components/ui/badge";
import { Title } from "@/modules/components";

export const BadgeComponent = () => {

  return (
    <section>
      <Title>Badge</Title>
      <div className="flex gap-2 mb-3">
        <Badge>default</Badge>
        <Badge variant="outline">outline</Badge>
        <Badge variant="primary" capitalize>primary</Badge>
        <Badge variant="secondary" lowercase>SECONDARY</Badge>
        <Badge variant="info" uppercase>info</Badge>
        <Badge variant="success">success</Badge>
        <Badge variant="warning">warning</Badge>
        <Badge variant="destructive">destructive</Badge>
      </div>

      <div className="flex gap-2">
        <Badge variant="primary_outline">primary</Badge>
        <Badge variant="secondary_outline">secondary</Badge>
        <Badge variant="info_outline">info</Badge>
        <Badge variant="success_outline">success</Badge>
        <Badge variant="warning_outline">warning</Badge>
        <Badge variant="destructive_outline">destructive</Badge>
      </div>
    </section>
  );
};
