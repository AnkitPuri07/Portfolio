import JavascriptImage from '../../assets/JavaScript.jpg'
import ReactImage from '../../assets/React.jpg'
import HTMLImage from '../../assets/HTML.jpg'
import TailwindImage from '../../assets/Tailwind.jpg'
import NPMImage from '../../assets/NPM.jpg'
import gitImage from '../../assets/git.jpg'
import VsImage from '../../assets/VS.jpg'
import Node from '../../assets/node-js.jpg'
import Next from '../../assets/Next-js.jpg'

const skillsInformation = [
  // --- FRONT END SKILLS ---
  {
    id: 1,
    Name: 'React',
    Proficiency: 60,
    img: ReactImage, 
    SkillType: 'frontend'
  },
  {
    id: 2,
    Name: 'JavaScript',
    Proficiency: 75,
    img: JavascriptImage, // Replace with your 'JavascriptImage' variable
    SkillType: 'frontend'
  },
  {
    id: 3,
    Name: 'HTML',
    Proficiency: 90,
    img: HTMLImage, // Replace with your 'HTMLImage' variable
    SkillType: 'frontend'
  },
  {
    id: 4,
    Name: 'Tailwind CSS',
    Proficiency: 80,
    img: TailwindImage, // Replace with your 'TailwindImage' variable
    SkillType: 'frontend'
  },
  // --- TOOLS SKILLS ---
  {
    id: 5,
    Name: 'Git',
    Proficiency: 85,
    img: gitImage, // Replace with your 'gitImage' variable
    SkillType: 'tools'
  },
  {
    id: 6,
    Name: 'VS Code',
    Proficiency: 75,
    img: VsImage, // Replace with your 'VsImage' variable
    SkillType: 'tools'
  },
  {
    id: 7,
    Name: 'npm',
    Proficiency: 65,
    img: NPMImage, // Replace with your 'NPMImage' variable
    SkillType: 'tools'
  },
  // --- OTHER SKILLS ---
  {
    id: 8,
    Name: 'Next.js',
    Proficiency: 30,
    img: Next, // Replace with your actual image variable
    SkillType: 'others'
  },
  {
    id: 9,
    Name: 'Node.js',
    Proficiency: 40,
    img: Node, // Replace with your actual image variable
    SkillType: 'others'
  }
];

export default skillsInformation;