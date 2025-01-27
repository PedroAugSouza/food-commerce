import { Linkedin, Github, Mail } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="mt-16 h-96 w-full bg-black px-44 py-6 text-white">
      <div className="grid w-full place-items-center">
        <span className="text-sm text-zinc-400">
          Desenvolvido por Pedro Souza
        </span>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-2 text-lg">
          <h1>Contato</h1>
          <ul className="flex flex-col items-start justify-start gap-2 text-sm">
            <li>
              <Link
                href="https://www.linkedin.com/in/pedro-s-76b0b6220/"
                className="flex items-center gap-2"
                target="_blank"
              >
                <Linkedin size={24} className="rounded border p-0.5" />
                <span>Pedro Souza</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/PedroAugSouza"
                className="flex items-center gap-2"
                target="_blank"
              >
                <Github size={24} className="rounded border p-0.5" />
                <span>PedroAugSouza</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://criarmeulink.com.br/u/1737638213"
                className="flex items-center gap-2"
                target="_blank"
              >
                <Mail size={22} className="rounded" />
                <span>pedroaugustosilva.880@gmail.com</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center"></div>
      </div>
    </footer>
  );
};
