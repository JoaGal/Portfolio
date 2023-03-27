import Image from 'next/image';

export default function ProjectsItems({

  img = 'url',
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
      <>
        <Image src={img} alt="project img" className='project__img' />
        <div className='projectItem__info'>
          <h3 className="projectItem__title">{title}</h3>
          <p className='projectItem__desc'>{desc}</p>
        </div>
      </>

  );
}
