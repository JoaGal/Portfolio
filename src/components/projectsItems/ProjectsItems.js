import Image from "next/image";
import Link from "next/link";

export default function ProjectsItems({
  img = "url",
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  links = "https://www.google.com.ar/",
}) {
  return (
    <>
      <Image src={img} alt="project img" className="project__img" />
      <div className="projectItem__info">
        <Link href={links} target="_blank" className="projectItem__link">
          <h3 className="projectItem__title">{title}</h3>
          <p className="projectItem__desc">{desc}</p>
        </Link>
      </div>
    </>
  );
}
