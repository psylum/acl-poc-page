'use client'
import { LibraryForm } from '@org/acl-poc-lib';

export default function SharedForm({stringArg}: {stringArg: string}) {
  return (
    <LibraryForm stringArg={stringArg} />
  );
}
