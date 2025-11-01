import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/Dashboard">Dashboard</Link> |{" "}
          <Link href="/Students">Students</Link> |{" "}
          <Link href="/Teachers">Teachers</Link> |{" "}
          <Link href="/Classes">Classes</Link> |{" "}
          <Link href="/Exams">Exams</Link> |{" "}
          <Link href="/ParentPortal">Parent Portal</Link> |{" "}
          <Link href="/TeacherPortal">Teacher Portal</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}