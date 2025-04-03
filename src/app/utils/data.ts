export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About me', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
 {
    name: 'Company News Analyzer',
    repo: 'https://github.com/samay2504/nlp-news-analyzer',
    url: '',
    image: 'https://i.ibb.co/ynYGXypt/f.jpg',
    description:
      'The NLP News Analyzer, utilizing 100% Python, excels in advanced Natural Language Processing (NLP), achieving over 90% sentiment analysis accuracy. It processes extensive news datasets efficiently, leveraging machine learning and data visualization for insightful analysis.',
    tags: ['nlp', 'streamlit', 'python', 'fast-api', 'transformers', 'soundfile']
  },
  {
    name: 'Spam Message Detector',
    repo: 'https://github.com/samay2504/NLP---Deployment',
    url: '',
    image:
      'https://i.ibb.co/rGgFZ04g/r.jpg',
    description:
      'Deployed Naive Bayes classifier with 97%+ accuracy, handling 100+ requests/min on EC2 with CI/CD pipeline.',
    tags: ['html', 'css', 'python', 'scikit-learn', 'aws']
  },
  {
    name: 'Server Client Simulator',
    repo: 'https://github.com/samay2504/File-sharing-system/tree/main',
    url: '',
    image:
      'https://i.ibb.co/Tx7pGYzY/f.jpg',
    description: 'Developed a distributed application to enhance secure file sharing over the network; implemented real-time monitoring features that enabled tracking of file access, resulting in a 25% reduction in security breach reports.',
    tags: ['python', 'pickle', 'tcp', 'multithreading', 'socket']
  },
  {
    name: 'Summer to Winter using CycleGANs',
    repo: 'https://github.com/samay2504/summer2winter_cycleGANs',
    url: '',
    image:
      'https://i.ibb.co/N2pcSWhk/ddf.png',
    description: 'Developed a CycleGAN model for image-to-image translation between summer and winter landscapes. Trained generators with adversarial and cyclic losses, incorporating Instance Normalization.',
    tags: ['python', 'deep learning', 'cycleGANs', 'torch']
  },
  {
    name: 'Prosopis Juliflora Detection',
    repo: 'https://github.com/samay2504/IMPACT',
    url: '',
    image:
      'https://i.ibb.co/4n0k4wbr/gg.jpg',
    description: 'Developed a deep learning model to detect Prosopis juliflora using NDVI from satellite imagery. Achieved 95% accuracy in vegetation classification using DeepLabv3+ with labeled mask overlays [‘y train‘: (4, 3155, 5545, 1)]. Preprocessed high-resolution ‘.tif‘ files with QGIS and automated segmentation via Python (numpy, rasterio, matplotlib, TensorFlow).',
    tags: ['deep learning', 'computer vision', 'opencv', 'torch', 'QGIS']
  },
  {
    name: 'Automated Data Visualizer',
    repo: 'https://github.com/samay2504/Data-Visualizer-using-Language-Model',
    url: '',
    image:
      'https://i.ibb.co/bgfZyxKd/fg.png',
    description: 'Developed an automated research poster system using Groq LLM api, pypdf2 and matplotlib. Generated summaries, extracted key points, and created 5 plot types with 95% accuracy. Designed visually appealing posters (1600x1800 px) using TailwindCSS. Reduced manual effort by 20% and delivered outputs in under 5 minutes/poster, streamlining research workflows.',
    tags: ['llm', 'tailwindcss', 'groq', 'matplotlib', 'seaborn']
  },
  {
    name: 'IITJ Navigation System',
    repo: 'https://github.com/samay2504/IITJ-RAM',
    url: false,
    image:
      'https://i.ibb.co/bgnqcFZL/Df.jpg',
    description: 'Created an Android app for navigation using Augmented Reality and Google Maps',
    tags: ['express', 'api', 'html', 'nodejs', 'typescript', 'swift', 'dart', 'cmake']
  }
]

export const skillsData = [
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img: 'c/c-original.svg',
    name: 'C'
  },
  {
    img: 'cplusplus/cplusplus-original.svg',
    name: 'C++'
  },
  {
    img: 'pytorch/pytorch-original.svg',
    name: 'Pytorch'
  },
  {
    img: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'AWS'
  },
  {
    img: 'tensorflow/tensorflow-original.svg',
    name: 'Tensorflow'
  },
  {
    img: 'tailwindcss/tailwindcss-original.svg',
    name: 'Tailwindcss'
  },
  {
    img: 'pycharm/pycharm-original.svg',
    name: 'Pycharm'
  },
  {
    img: 'docker/docker-original.svg',
    name: 'Docker'
  },
  {
    img: 'googlecloud/googlecloud-original.svg',
    name: 'Google Cloud'
  },
  {
    img: 'postgresql/postgresql-original.svg',
    name: 'PostgreSQL'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  }
]
