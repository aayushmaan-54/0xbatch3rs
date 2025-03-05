import { 
  Code, 
  ShieldOff, 
  UploadFile, 
  Users 
} from "@/app/assets/images/svg";


const featuresData = [
  {
    id: 0,
    heading: "No Censorship",
    content: "Upload and share any .bat script freely without restrictions. Use at your own discretion.",
    icon: ShieldOff,
  },
  {
    id: 1,
    heading: "Community Driven",
    content: "Rate scripts, leave feedback, and collaborate with fellow Batchers to improve and grow the ecosystem.",
    icon: Users,
  },
  {
    id: 2,
    heading: "Upload Scripts",
    content: "Contribute your .bat scripts and showcase your expertise to the community.",
    icon: UploadFile,
  },
  {
    id: 3,
    heading: "Open Source",
    content: "Built on an open-source foundation—fix bugs, add features, and improve freely.",
    icon: Code,
  },
];


export default featuresData;