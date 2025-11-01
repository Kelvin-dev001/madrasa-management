import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Madrasa Management</title>
      </Head>
      <main>
        <h1>Welcome to Madrasa Management System</h1>
        <nav>
          <ul>
            <li><Link href="/Dashboard">Dashboard</Link></li>
            <li><Link href="/Students">Students</Link></li>
            <li><Link href="/Teachers">Teachers</Link></li>
            <li><Link href="/Classes">Classes</Link></li>
            <li><Link href="/Exams">Exams</Link></li>
            <li><Link href="/ParentPortal">Parent Portal</Link></li>
            <li><Link href="/TeacherPortal">Teacher Portal</Link></li>
          </ul>
        </nav>
      </main>
    </>
  );
}