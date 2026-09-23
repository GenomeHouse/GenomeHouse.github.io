import './globals.css';

export const metadata = {
  title: 'GenomeHouse - Modular Bioinformatics Toolkit',
  description: 'Modular bioinformatics toolkit for sequence analysis, parsing, ML, and visualization.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
