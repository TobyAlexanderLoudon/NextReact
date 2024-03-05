import Link  from "next/link";

export default function F1() {
  return(
        <>
            <h1>Intercept File 1</h1>
            <Link href="/f1/f2">File 2</Link>
        </>
    );
}