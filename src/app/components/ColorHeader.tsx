interface ColorHeaderProps {
  name: string;
  hexColor: string;
  description: string;
}

export default function ColorHeader({ 
  name, 
  hexColor, 
  description 
}: ColorHeaderProps) {
  return (
    <div className="mb-12">
      {/* Nome da cor */}
      <h1 className="color-name" style={{ color: hexColor }}>
        {name}
      </h1>

      {/* Descrição editorial */}
      <p className="movie-description max-w-4xl">
        <span className="font-bold" style={{ color: hexColor }}>O {name.toLowerCase()}</span> {description}
      </p>
    </div>
  );
}

