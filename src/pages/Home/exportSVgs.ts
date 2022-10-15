import expressoTradicional from '../../assets/expresso-tradicional.svg'
import expressoAmericano from '../../assets/expresso-americano.svg'
import expressoCremoso from '../../assets/expresso-cremoso.svg'
import expressoGelado from '../../assets/expresso-gelado.svg'
import cafeComLeite from '../../assets/cafe-com-leite.svg'
import latte from '../../assets/latte.svg'
import capuccino from '../../assets/capuccino.svg'
import macchiato from '../../assets/macchiato.svg'
import mocaccino from '../../assets/mocaccino.svg'
import chocolateQuente from '../../assets/chocolate-quente.svg'
import cubano from '../../assets/cubano.svg'
import havaiano from '../../assets/havaiano.svg'
import arabe from '../../assets/arabe.svg'
import irlandes from '../../assets/irlandes.svg'

import { v4 as uuidV4 } from 'uuid'

export interface ICoffees {
  id: string
  path: string
  name: string
  description: string
  price: number
  tags: {
    id: string
    arrayTags: string[]
  }
}

const Coffees: ICoffees[] = [
  {
    id: uuidV4(),
    path: expressoTradicional,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: {
      id: uuidV4(),
      arrayTags: ['TRADICIONAL'],
    },
  },
  {
    id: uuidV4(),
    path: expressoAmericano,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 12.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['TRADICIONAL'],
    },
  },
  {
    id: uuidV4(),
    path: expressoCremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 12.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['TRADICIONAL', 'QUENTE'],
    },
  },
  {
    id: uuidV4(),
    path: expressoGelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['TRADICIONAL', 'GELADO'],
    },
  },
  {
    id: uuidV4(),
    path: cafeComLeite,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 7.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['TRADICIONAL', 'COM LEITE'],
    },
  },
  {
    id: uuidV4(),
    path: latte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 13.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['TRADICIONAL', 'COM LEITE'],
    },
  },
  {
    id: uuidV4(),
    path: capuccino,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 12.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['TRADICIONAL', 'COM LEITE'],
    },
  },
  {
    id: uuidV4(),
    path: macchiato,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 14.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['TRADICIONAL', 'COM LEITE'],
    },
  },
  {
    id: uuidV4(),
    path: mocaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 14.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['TRADICIONAL', 'COM LEITE'],
    },
  },
  {
    id: uuidV4(),
    path: chocolateQuente,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 15.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['ESPECIAL', 'COM LEITE'],
    },
  },
  {
    id: uuidV4(),
    path: cubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 18.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    },
  },
  {
    id: uuidV4(),
    path: havaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 11.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['ESPECIAL'],
    },
  },
  {
    id: uuidV4(),
    path: arabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 16.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['ESPECIAL'],
    },
  },
  {
    id: uuidV4(),
    path: irlandes,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 18.0,
    tags: {
      id: uuidV4(),
      arrayTags: ['ESPECIAL', 'ALCOÓLICO'],
    },
  },
]

export default Coffees
