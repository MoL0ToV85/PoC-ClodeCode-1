export interface Plato {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  popular?: boolean;
}

export const categorias = [
  { id: "entradas", nombre: "Entradas", emoji: "🥟" },
  { id: "chapsui", nombre: "Chapsui", emoji: "🥘" },
  { id: "principales", nombre: "Platos Principales", emoji: "🍜" },
  { id: "arroz", nombre: "Arroces", emoji: "🍚" },
  { id: "menus", nombre: "Menús para Compartir", emoji: "🥢" },
];

export const platos: Plato[] = [
  // Entradas
  { nombre: "Wantán Frito", descripcion: "Crujientes wantanes rellenos de carne y verduras, servidos con salsa agridulce", precio: 4500, categoria: "entradas", popular: true },
  { nombre: "Arrollado Primavera", descripcion: "Rollitos de primavera rellenos de carne, vegetales y fideos de arroz", precio: 4800, categoria: "entradas", popular: true },
  { nombre: "Empanada de Camarón", descripcion: "Empanada estilo chino-chileno rellena de camarones salteados", precio: 5200, categoria: "entradas", popular: true },
  { nombre: "Arrollado de Queso", descripcion: "Rollito crujiente relleno de queso derretido y especias chinas", precio: 4200, categoria: "entradas" },
  { nombre: "Parrilla China", descripcion: "Mixto de carnes y verduras salteadas en salsa de soya especial", precio: 8900, categoria: "entradas" },

  // Chapsui
  { nombre: "Chapsui de Pollo", descripcion: "Salteado de pollo con vegetales mixtos en salsa oriental, con arroz chaufán", precio: 7200, categoria: "chapsui", popular: true },
  { nombre: "Chapsui de Carne", descripcion: "Salteado de carne de res con vegetales mixtos en salsa oriental, con arroz chaufán", precio: 7200, categoria: "chapsui" },
  { nombre: "Chapsui de Camarón", descripcion: "Salteado de camarones con vegetales mixtos en salsa oriental, con arroz chaufán", precio: 8500, categoria: "chapsui" },
  { nombre: "Chapsui de Filete", descripcion: "Salteado de filete de pescado con vegetales mixtos en salsa oriental, con arroz chaufán", precio: 8800, categoria: "chapsui" },
  { nombre: "Chapsui de Verduras", descripcion: "Salteado de verduras de temporada en salsa oriental, con arroz chaufán", precio: 5800, categoria: "chapsui" },
  { nombre: "Chapsui Especial", descripcion: "Mixto de pollo, carne y camarones con vegetales en salsa de la casa, con arroz chaufán", precio: 9800, categoria: "chapsui" },

  // Platos Principales
  { nombre: "Carne Mongoliana", descripcion: "Trozos de carne de res salteados con cebollín y vegetales en salsa mongoliana", precio: 7800, categoria: "principales", popular: true },
  { nombre: "Pollo Mongoliano", descripcion: "Trozos de pollo salteados con cebollín y vegetales en salsa mongoliana", precio: 7200, categoria: "principales" },
  { nombre: "Filete Mongoliano", descripcion: "Filete de pescado salteado con cebollín y vegetales en salsa mongoliana", precio: 9200, categoria: "principales" },
  { nombre: "Carne Champiñón", descripcion: "Trozos de carne de res salteados con champiñones frescos en salsa de soya", precio: 7500, categoria: "principales" },
  { nombre: "Pollo Champiñón", descripcion: "Trozos de pollo salteados con champiñones frescos en salsa de soya", precio: 6800, categoria: "principales" },
  { nombre: "Diente de Dragón con Carne", descripcion: "Vegetales diente de dragón salteados con carne de res y salsa especial", precio: 7800, categoria: "principales" },
  { nombre: "Diente de Dragón con Pollo", descripcion: "Vegetales diente de dragón salteados con pollo y salsa especial", precio: 7200, categoria: "principales" },
  { nombre: "Pollo Chitén", descripcion: "Pollo frito cubierto con salsa chitén agridulce y piña", precio: 7500, categoria: "principales" },
  { nombre: "Costillar Cantonés", descripcion: "Costillar de cerdo cocido a fuego lento en salsa cantonesa con especias", precio: 8900, categoria: "principales" },
  { nombre: "Chaumín de Carne", descripcion: "Fideos chaumín salteados con carne de res y vegetales", precio: 7200, categoria: "principales" },
  { nombre: "Chaumín de Pollo", descripcion: "Fideos chaumín salteados con pollo y vegetales", precio: 6800, categoria: "principales" },
  { nombre: "Pollo Chicharrón", descripcion: "Trozos de pollo frito crujiente con salsa agridulce", precio: 7200, categoria: "principales" },
  { nombre: "Pollo Piña", descripcion: "Trozos de pollo salteados con piña fresca en salsa agridulce", precio: 7200, categoria: "principales" },
  { nombre: "Arrollado de Mariscos", descripcion: "Rollito crujiente relleno de mariscos mixtos salteados", precio: 6500, categoria: "principales" },

  // Arroces
  { nombre: "Arroz Chaufán de Pollo", descripcion: "Arroz frito estilo chileno con pollo, huevo, verduras y salsa de soya", precio: 5200, categoria: "arroz", popular: true },
  { nombre: "Arroz Chaufán de Carne", descripcion: "Arroz frito estilo chileno con carne de res, huevo, verduras y salsa de soya", precio: 5500, categoria: "arroz" },
  { nombre: "Arroz Chaufán de Camarón", descripcion: "Arroz frito estilo chileno con camarones, huevo, verduras y salsa de soya", precio: 6800, categoria: "arroz" },
  { nombre: "Arroz Chaufán Especial", descripcion: "Arroz frito con pollo, carne, camarones, huevo y verduras", precio: 7500, categoria: "arroz" },

  // Menús para Compartir
  { nombre: "Menú 2 Personas A", descripcion: "1 Wantán Frito + 1 Empanada de Camarón + 1 Parrilla China + 2 Arroz Chaufán", precio: 25280, categoria: "menus" },
  { nombre: "Menú 2 Personas B", descripcion: "1 Wantán Frito + 1 Carne Mongoliana + 1 Chapsui de Pollo + 2 Arroz Chaufán", precio: 25280, categoria: "menus" },
  { nombre: "Menú 3 Personas A", descripcion: "1 Wantán + 1 Arrollado Primavera + 1 Empanada Camarón + 1 Carne Cantonés + 1 Chapsui Camarón + 3 Arroz Chaufán", precio: 42580, categoria: "menus" },
  { nombre: "Menú 3 Personas B", descripcion: "1 Wantán + 1 Arrollado Primavera + 1 Carne Mongoliana + 1 Diente de Dragón + 1 Chapsui Pollo + 3 Arroz Chaufán", precio: 38780, categoria: "menus" },
  { nombre: "Menú 4 Personas A", descripcion: "1 Wantán + 1 Arrollado Primavera + 1 Empanada + 1 Arrollado Queso + 1 Filete Mongoliano + 1 Chaumín + 1 Costillar + 4 Arroz Chaufán", precio: 54780, categoria: "menus" },
  { nombre: "Menú 5 Personas A", descripcion: "2 Wantán + 1 Arrollado Primavera + 1 Empanada + 1 Arrollado Queso + 1 Filete Mongoliano + 1 Chapsui Camarón + 1 Chaumín + 1 Pollo Chitén + 5 Arroz Chaufán", precio: 73180, categoria: "menus" },
];

export function formatPrecio(precio: number): string {
  return `$${precio.toLocaleString("es-CL")}`;
}

export function getPlatosPorCategoria(categoria: string): Plato[] {
  return platos.filter((p) => p.categoria === categoria);
}

export function getPlatosPopulares(): Plato[] {
  return platos.filter((p) => p.popular);
}
