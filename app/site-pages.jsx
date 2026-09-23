'use client';

import { useState } from 'react';
const logo = '/media/genome-house.png';
const repoUrl = 'https://github.com/GenomeHouse/GenomeHouse-1.1';
const pypiUrl = 'https://pypi.org/project/genomehouse/';
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
  return <button className="copy-button" onClick={copy} aria-label="Copy code">{copied ? 'Copied' : 'Copy'}</button>;
}

function Header({ documentation = false }) {
  const links = documentation
    ? [['Overview', '#overview'], ['Installation', '#installation'], ['API reference', '#sequence-tools'], ['Tutorials', '#basic-analysis']]
    : [['Platform', '#features'], ['Installation', '#installation'], ['Examples', '#examples'], ['Documentation', '/documentation']];
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href={documentation ? '/' : '#top'}><img src={logo} alt="GenomeHouse logo" /><span>GenomeHouse</span></a>
  {open && <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)}><aside className="mobile-drawer" onClick={(event) => event.stopPropagation()}><div className="drawer-head"><span className="eyebrow">GenomeHouse</span><button onClick={() => setOpen(false)} aria-label="Close navigation">×</button></div><nav>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}</nav><div className="drawer-links"><a href={pypiUrl} target="_blank" rel="noreferrer">Open package page ↗</a><a href={repoUrl} target="_blank" rel="noreferrer">Explore source ↗</a></div></aside></div>}
function SectionLabel({ children, number }) { return <div className="section-label"><span>{number}</span>{children}</div>; }
function SectionHeading({ eyebrow, title, subtitle }) { return <div className="section-heading">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>; }

const features = [
  ['01', 'Sequence analysis', 'Work directly with DNA and RNA sequences using predictable, composable primitives.', 'GC content, motif search, reverse complement, translation'],
  ['02', 'Genomic parsing', 'Stream standard research formats without forcing whole files into memory.', 'FASTA, FASTQ, VCF, GFF/GTF'],
  ['03', 'Machine learning', 'Move from biological sequences to useful features and baseline models quickly.', 'Feature extraction, classification, clustering'],
  ['04', 'Visualization', 'Create publication-ready views for genomic and biological data.', 'Alignments, phylogenies, statistical charts'],
  ['05', 'Statistics', 'Turn exploratory measurements into reproducible analysis workflows.', 'Hypothesis tests, correlations, distributions'],
  ['06', 'Extensible API', 'Compose the toolkit around your own pipelines and research conventions.', 'Modular architecture, plugins, custom workflows'],
export function HomeScreen() {
  return <div id="top" className="app-shell"><Header /><main>
    <section className="hero shell-wide"><div className="hero-copy"><div className="status-line"><span className="status-dot" /> v1.2.0 is available on PyPI <a href={pypiUrl} target="_blank" rel="noreferrer">View release notes ↗</a></div><h1>Research-grade tools for <em>living data.</em></h1><p className="hero-lede">GenomeHouse is a modular Python toolkit for sequence analysis, genomic parsing, machine learning, visualization, and the work that connects them.</p><div className="hero-actions"><a className="button button-primary" href="#installation">Start with GenomeHouse <span>→</span></a><a className="text-link" href="/documentation">Read the documentation <span>↗</span></a></div><div className="hero-meta"><span><b>Python</b> ≥ 3.8</span><span><b>License</b> MIT</span><span><b>Release</b> Aug 10, 2025</span></div></div><div className="hero-console"><div className="console-top"><span><i /> <i /> <i /></span><span>genomehouse / quickstart.py</span><span>01</span></div><div className="console-code"><p><b className="code-blue">from</b> genomehouse <b className="code-blue">import</b> sequence_tools</p><p className="code-muted"># inspect a sequence in one line</p><p>sequence = <b className="code-green">&quot;ATGCGTAC&quot;</b></p><p>gc_content = sequence_tools.gc_content(sequence)</p><p className="code-output">&gt; 50.0</p></div><div className="console-foot"><span>● ready</span><span>4 tools loaded</span></div></div></section>
    <section className="signal-strip"><div className="shell-wide signal-grid"><div><span className="signal-value">6</span><span>research domains</span></div><div><span className="signal-value">4</span><span>file formats</span></div><div><span className="signal-value">1</span><span>modular toolkit</span></div><div className="signal-note">Built for the gap between a notebook and a pipeline.</div></div></section>
    <section id="features" className="section shell-wide"><SectionLabel number="01">The platform</SectionLabel><SectionHeading title="One toolkit, many ways into the data." subtitle="Start with a single sequence or build a repeatable workflow. Each module stays small enough to understand and useful enough to ship." /><div className="feature-grid">{features.map(([number, title, description, tags]) => <article className="feature-card" key={title}><div className="feature-number">{number}</div><h3>{title}</h3><p>{description}</p><span className="feature-tags">{tags}</span><span className="card-arrow">↗</span></article>)}</div></section>
    <section id="installation" className="section section-tint"><div className="shell-wide install-layout"><div><SectionLabel number="02">Get started</SectionLabel><SectionHeading title="From zero to first result in seconds." subtitle="Install the package, open a Python shell, and keep your attention on the biology." /><div className="install-note"><span className="note-mark">i</span><p>GenomeHouse 1.2.0 requires Python 3.8 or newer. Optional dependencies are available for visualization and machine learning.</p></div></div><div className="install-panel"><div className="panel-top"><span>Terminal</span><CopyButton text="pip install genomehouse" /></div><code><span className="prompt">$</span> pip install genomehouse</code><div className="panel-rule" /><div className="panel-check"><span className="check">✓</span><div><strong>Ready to import</strong><small>genomehouse.__version__ → 1.2.0</small></div></div></div></div></section>
    <section id="examples" className="section shell-wide"><SectionLabel number="03">In the lab</SectionLabel><SectionHeading title="Small examples. Serious workflows." subtitle="A few familiar entry points from the package README, arranged for quick scanning and copying." /><div className="example-grid">{examples.map(([title, module, code]) => <article className="example-card" key={title}><div className="example-head"><span>{title}</span><b>{module}</b></div><pre><code>{code}</code></pre><CopyButton text={code} /></article>)}</div></section>
    <section className="cta-band"><div className="shell-wide cta-inner"><div><p className="eyebrow">A clearer starting point</p><h2>Build the analysis around the question.</h2></div><a className="button button-primary" href="/documentation">Open API documentation <span>→</span></a></div></section>
  </main><Footer /></div>;
}

function Footer() { return <footer className="site-footer"><div className="shell-wide footer-grid"><div><a className="brand footer-brand" href="#top"><img src={logo} alt="GenomeHouse logo" /><span>GenomeHouse</span></a><p>Modular bioinformatics toolkit for sequence analysis, parsing, ML, and visualization.</p></div><div><p className="footer-title">Explore</p><a href="/documentation">Documentation</a><a href={pypiUrl}>PyPI package</a><a href={repoUrl}>Source on GitHub</a></div><div><p className="footer-title">Project</p><span>Version 1.2.0</span><span>MIT License</span><span>Python ≥ 3.8</span></div></div><div className="shell-wide footer-bottom"><span>© 2024 GenomeHouse</span><span>Built for the bioinformatics community</span></div></footer>; }

const apiSections = [
  ['sequence-tools', 'sequence_tools', [['gc_content(sequence)', 'Calculate the GC content percentage of a DNA sequence.', 'sequence_tools.gc_content("ATGCGCGCTA")'], ['reverse_complement(sequence)', 'Generate the reverse complement of a DNA sequence.', 'sequence_tools.reverse_complement("ATGCGT")'], ['find_motifs(sequence, motif)', 'Find all occurrences of a motif pattern in a sequence.', 'sequence_tools.find_motifs("ATGCGCGCTA", "GC")'], ['translate(sequence, frame=0)', 'Translate DNA sequence to amino acid sequence.', 'sequence_tools.translate("ATGAAATAG")']]],
  ['genomic-parsers', 'genomic_parsers', [['parse_fasta(filename)', 'Parse FASTA files and yield header-sequence pairs.', 'for header, sequence in genomic_parsers.parse_fasta("sequences.fasta")'], ['parse_fastq(filename)', 'Parse FASTQ files with quality scores.', 'for record in genomic_parsers.parse_fastq("reads.fastq")'], ['parse_vcf(filename)', 'Parse VCF variant files.', 'for variant in genomic_parsers.parse_vcf("variants.vcf")']]],
  ['ml-tools', 'ml_tools', [['extract_features(sequences, method="kmer")', 'Extract numerical features from biological sequences.', 'features = ml_tools.extract_features(sequences, method="kmer")'], ['SequenceClassifier()', 'Machine learning classifier for biological sequences.', 'classifier.fit(features, labels)\npredictions = classifier.predict(new_features)']]],
];

export function DocumentationScreen() {
  const [active, setActive] = useState('overview');
  const navItems = [['overview', 'Overview'], ['installation', 'Installation'], ['requirements', 'Requirements'], ['quick-start', 'Quick start'], ...apiSections.map(([id, title]) => [id, title]), ['basic-analysis', 'Basic analysis'], ['troubleshooting', 'Troubleshooting'], ['contributing', 'Contributing']];
  return <div className="docs-shell"><Header documentation /><div className="docs-layout shell-wide"><aside className="docs-sidebar"><p className="eyebrow">On this page</p><nav>{navItems.map(([id, title]) => <a className={active === id ? 'active' : ''} key={id} href={`#${id}`} onClick={() => setActive(id)}>{title}</a>)}</nav><div className="sidebar-version">GenomeHouse<br /><b>v1.2.0</b></div></aside><main className="docs-main"><section id="overview" className="docs-intro"><div className="status-line"><span className="status-dot" /> Documentation / v1.2.0</div><h1>Documentation for <em>working minds.</em></h1><p>Everything you need to move from sequence-level exploration to reproducible genomic workflows.</p><div className="docs-links"><a href={pypiUrl}>Package on PyPI ↗</a><a href={repoUrl}>Source repository ↗</a></div></section><DocSection id="installation" title="Installation" intro="Install the latest release from the Python Package Index or work from source."><DocCard title="Install from PyPI" code="pip install genomehouse" /><DocCard title="Install from source" code={'git clone https://github.com/GenomeHouse/GenomeHouse-1.1.git\ncd GenomeHouse-1.1\npip install -e .'} /></DocSection><DocSection id="requirements" title="Requirements" intro="The core package is intentionally lightweight. Add optional dependencies as your analysis grows."><div className="docs-two-col"><InfoCard title="Python requirements"><p>Python ≥ 3.8</p><p>NumPy ≥ 1.19.0</p><p>Pandas ≥ 1.3.0</p></InfoCard><InfoCard title="Optional dependencies"><p>Matplotlib for visualization</p><p>Scikit-learn for ML features</p><p>Seaborn for advanced plots</p></InfoCard></div></DocSection><DocSection id="quick-start" title="Quick start" intro="Import the modules you need and compose them in a normal Python workflow."><DocCard title="Basic workflow" code={'from genomehouse import sequence_tools, genomic_parsers\n\nseq = "ATGCGTAC"\nprint(sequence_tools.gc_content(seq))\n\nfor header, sequence in genomic_parsers.parse_fasta("example.fasta"):\n    print(header, sequence)'} /></DocSection>{apiSections.map(([id, title, methods]) => <DocSection key={id} id={id} title={`${title} module`} intro="Composable primitives for common bioinformatics analysis tasks."><div className="method-list">{methods.map(([name, description, code]) => <DocCard key={name} title={name} description={description} code={code} />)}</div></DocSection>)}<DocSection id="basic-analysis" title="Basic analysis" intro="A complete sequence analysis workflow using the core sequence_tools API."><DocCard title="Analyze a sequence" code={'from genomehouse import sequence_tools\n\ndna_sequence = "ATGAAACGCATTAGCACCACCATTACCACCACCATCACCATTACCACAGGTAACGGTGCGGGCTGA"\ngc_content = sequence_tools.gc_content(dna_sequence)\nprotein = sequence_tools.translate(dna_sequence)\nprint(f"GC content: {gc_content:.1f}%")\nprint(f"Protein: {protein}")'} /></DocSection><DocSection id="troubleshooting" title="Troubleshooting"><InfoCard title="Common issues"><p><b>ImportError:</b> check that the package is installed in the active environment.</p><p><b>FileNotFoundError:</b> verify the path and working directory.</p><p><b>Memory concerns:</b> use streaming parsers for large files.</p></InfoCard></DocSection><DocSection id="contributing" title="Contributing" intro="Contributions, tests, and documentation improvements are welcome."><DocCard title="Development setup" code={'git clone https://github.com/GenomeHouse/GenomeHouse-1.1.git\ncd GenomeHouse-1.1\npip install -e .[dev]\npytest tests/'} /></DocSection></main></div><Footer /></div>;
}

function DocSection({ id, title, intro, children }) { return <section id={id} className="doc-section"><div className="doc-section-heading"><h2>{title}</h2>{intro && <p>{intro}</p>}</div>{children}</section>; }
function DocCard({ title, description, code }) { return <article className="doc-card"><div className="doc-card-title"><div><h3>{title}</h3>{description && <p>{description}</p>}</div><CopyButton text={code} /></div><pre><code>{code}</code></pre></article>; }
function InfoCard({ title, children }) { return <div className="info-card"><h3>{title}</h3>{children}</div>; }
'use client';

import { useState } from 'react';

const logo = '/media/genome-house.png';
const links = [
  ['Features', '#features'],
  ['Installation', '#installation'],
  ['Documentation', '/documentation'],
  ['Examples', '#examples'],
];

function Icon({ children }) {
  return <span aria-hidden="true" className="text-lg leading-none">{children}</span>;
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard?.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }
  return <button onClick={copy} className="rounded-md p-2 text-blue-600 hover:bg-blue-50" aria-label="Copy code">{copied ? '✓' : '⧉'}</button>;
}

function Header({ documentation = false }) {
  const [open, setOpen] = useState(false);
  const menuLinks = documentation ? [['Home', '/'], ['Installation', '#installation'], ['Quick Start', '#quick-start'], ['API Reference', '#sequence-tools'], ['Tutorials', '#basic-analysis']] : links;
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <a href={documentation ? '/' : '#top'} className="flex shrink-0 items-center gap-3">
            <img src={logo} alt="GenomeHouse logo" className="h-10 w-10 object-contain" />
            <span className="hidden text-xl font-bold gradient-text sm:block">GenomeHouse</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {menuLinks.map(([label, href]) => <a key={label} href={href} className="text-sm font-medium text-slate-600 transition hover:text-blue-600">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://pypi.org/project/genomehouse/" target="_blank" rel="noreferrer" className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"><Icon>▣</Icon><span className="ml-1 hidden sm:inline">PyPI</span></a>
            <a href="https://github.com/GenomeHouse/GenomeHouse-1.1" target="_blank" rel="noreferrer" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"><Icon>◉</Icon><span className="ml-1 hidden sm:inline">GitHub</span></a>
            <button onClick={() => setOpen(true)} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden" aria-label="Open menu">☰</button>
          </div>
        </div>
      </header>
      {open && <div className="fixed inset-0 z-50 bg-slate-950/40 md:hidden" onClick={() => setOpen(false)}>
        <aside className="h-full w-[min(20rem,88vw)] bg-white p-6 shadow-xl" onClick={(event) => event.stopPropagation()}>
          <div className="mb-6 flex items-center justify-between"><strong>Navigation</strong><button onClick={() => setOpen(false)} className="p-2" aria-label="Close menu">✕</button></div>
          <nav className="grid gap-1">{menuLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600">{label}</a>)}</nav>
        </aside>
      </div>}
    </>
  );
}

const features = [
  ['🧪', 'Sequence Analysis', 'Comprehensive tools for DNA/RNA sequence manipulation including reverse complement, motif search, GC content calculation, and translation.', ['Reverse complement generation', 'Motif pattern searching', 'GC content analysis', 'Sequence translation'], 'bg-blue-600'],
  ['▤', 'Data Parsing', 'Robust parsers for standard bioinformatics file formats with efficient memory usage and error handling.', ['FASTA/FASTQ parsing', 'VCF file processing', 'GFF/GTF annotation', 'Memory-efficient streaming'], 'bg-emerald-500'],
  ['◈', 'Machine Learning', 'Pre-built ML pipelines optimized for biological data analysis with feature extraction and model training.', ['Feature extraction pipelines', 'Classification models', 'Clustering algorithms', 'Cross-validation tools'], 'bg-violet-500'],
  ['▥', 'Visualization', 'Publication-quality plots and charts specifically designed for genomic and biological data presentation.', ['Sequence alignment plots', 'Phylogenetic trees', 'Statistical charts', 'Interactive visualizations'], 'bg-red-500'],
  ['▦', 'Statistical Analysis', 'Comprehensive statistical tools for hypothesis testing, correlation analysis, and data exploration.', ['Hypothesis testing', 'Correlation analysis', 'Distribution fitting', 'Significance testing'], 'bg-amber-500'],
  ['⚙', 'Extensible API', 'User-friendly, modular design that allows easy extension and customization for specific research needs.', ['Modular architecture', 'Plugin system', 'Custom workflows', 'Easy integration'], 'bg-indigo-500'],
];

const examples = [
  ['Sequence Analysis', 'from genomehouse import sequence_tools\n\nseq = "ATGCGTACGGCTA"\ngc_content = sequence_tools.gc_content(seq)\nprint(f"GC Content: {gc_content}%")', 'bg-blue-600'],
  ['File Parsing', 'from genomehouse import genomic_parsers\n\nfor header, sequence in genomic_parsers.parse_fasta("data.fasta"):\n    print(f">{header}")\n    print(f"Length: {len(sequence)}")', 'bg-emerald-500'],
  ['Machine Learning', 'from genomehouse import ml_tools\n\nsequences = ["ATGCGT", "GCATGC", "TGCATG"]\nfeatures = ml_tools.extract_features(sequences)\nmodel = ml_tools.SequenceClassifier()\nmodel.fit(features, labels)', 'bg-violet-500'],
  ['CLI Usage', '# Parse FASTA file\n$ genomehouse-cli parse-fasta data/sample.fasta\n# Calculate GC content\n$ genomehouse-cli gc-content ATGCGTAC', 'bg-red-500'],
];

export function HomeScreen() {
  return <div id="top" className="min-h-screen bg-white text-slate-900"><Header />
    <main>
      <section className="hero-pattern px-4 pb-16 pt-32 sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><img src={logo} alt="GenomeHouse logo" className="mx-auto mb-8 h-28 w-28 animate-float object-contain" /><h1 className="mb-6 text-5xl font-bold md:text-7xl"><span className="gradient-text">GenomeHouse</span></h1><p className="mb-4 text-xl text-slate-600 md:text-2xl">Next-Gen Tools for Next-Genomics</p><p className="mx-auto mb-8 max-w-2xl text-lg text-slate-500">Modular bioinformatics toolkit for sequence analysis, parsing, ML, and visualization</p><div className="flex flex-col items-center justify-center gap-3 sm:flex-row"><code className="rounded-lg bg-slate-900 px-5 py-3 text-sm text-white">pip install genomehouse</code><CopyButton text="pip install genomehouse" /></div><div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-500"><span>🟢 Latest: v1.2.0</span><span>🔵 Python ≥3.8</span><span>🟣 MIT License</span></div></div></section>
      <section id="features" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"><SectionHeading title="Powerful Features" subtitle="Everything you need for bioinformatics research" /><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">{features.map(([icon, title, description, items, color]) => <article key={title} className="rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"><div className={`${color} mb-5 flex h-12 w-12 items-center justify-center rounded-lg text-xl text-white`}>{icon}</div><h3 className="mb-3 text-xl font-semibold">{title}</h3><p className="mb-4 text-slate-600">{description}</p><ul className="space-y-1 text-sm text-slate-500">{items.map((item) => <li key={item}>• {item}</li>)}</ul></article>)}</div></section>
      <section id="installation" className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl"><SectionHeading title="Quick Installation" subtitle="Get started in seconds" /><div className="rounded-xl bg-slate-900 p-5 text-white sm:p-8"><div className="mb-4 flex items-center justify-between text-slate-400"><span>Terminal</span><CopyButton text="pip install genomehouse" /></div><code className="text-sm sm:text-lg">$ pip install genomehouse</code></div><div className="mt-8 grid gap-6 md:grid-cols-2"><InfoCard title="Requirements"><ul className="space-y-2 text-slate-600"><li>• Python ≥3.8</li><li>• NumPy, Pandas</li><li>• Matplotlib, Seaborn</li><li>• Scikit-learn</li></ul></InfoCard><InfoCard title="Verification"><code className="block rounded bg-slate-50 p-3 text-sm text-slate-600">&gt;&gt;&gt; import genomehouse<br />&gt;&gt;&gt; genomehouse.__version__<br /><span className="text-emerald-600">'1.2.0'</span></code></InfoCard></div></div></section>
      <section id="examples" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"><SectionHeading title="Code Examples" subtitle="See GenomeHouse in action" /><div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">{examples.map(([title, code, color]) => <article key={title} className="overflow-hidden rounded-xl bg-white shadow-lg"><h3 className={`${color} px-5 py-4 font-semibold text-white`}>{title}</h3><div className="p-5"><pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs leading-6 text-white sm:text-sm"><code>{code}</code></pre></div></article>)}</div></section>
      <section id="documentation" className="px-4 py-20 sm:px-6 lg:px-8"><SectionHeading title="Documentation & Resources" /><div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3"><ResourceCard href="/documentation" title="API Documentation" text="Complete API reference with examples and tutorials" icon="▤" /><ResourceCard href="https://pypi.org/project/genomehouse/" title="PyPI Package" text="Official package repository with version history" icon="▦" /><ResourceCard href="https://github.com/GenomeHouse/GenomeHouse-1.1" title="GitHub Repository" text="Source code, issues, and contribution guidelines" icon="◉" /></div></section>
    </main><Footer /></div>;
}

function SectionHeading({ title, subtitle }) { return <div className="mx-auto mb-12 max-w-3xl text-center"><h2 className="mb-3 text-3xl font-bold sm:text-4xl">{title}</h2>{subtitle && <p className="text-lg text-slate-600">{subtitle}</p>}</div>; }
function InfoCard({ title, children }) { return <div className="rounded-xl bg-slate-50 p-6"><h3 className="mb-4 text-lg font-semibold">{title}</h3>{children}</div>; }
function ResourceCard({ href, title, text, icon }) { return <a href={href} className="rounded-xl bg-white p-6 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"><div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-600 text-2xl text-white">{icon}</div><h3 className="mb-3 text-lg font-semibold">{title}</h3><p className="text-slate-600">{text}</p></a>; }
function Footer() { return <footer className="bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3"><div className="md:col-span-2"><div className="mb-4 flex items-center gap-3"><img src={logo} alt="GenomeHouse logo" className="h-8 w-8" /><strong className="text-xl">GenomeHouse</strong></div><p className="mb-4 max-w-lg text-slate-400">Modular bioinformatics toolkit for sequence analysis, parsing, ML, and visualization.</p><p className="text-sm text-slate-500">© 2024 GenomeHouse. Licensed under MIT License.</p></div><div><h3 className="mb-4 font-semibold">Resources</h3><div className="grid gap-2 text-slate-400"><a href="/documentation" className="hover:text-white">Documentation</a><a href="#examples" className="hover:text-white">Examples</a><a href="https://github.com/GenomeHouse/GenomeHouse-1.1" className="hover:text-white">GitHub</a></div></div></div></footer>; }

const apiSections = [
  ['sequence-tools', 'sequence_tools Module', [['gc_content(sequence)', 'Calculate the GC content percentage of a DNA sequence.', 'sequence_tools.gc_content("ATGCGCGCTA")'], ['reverse_complement(sequence)', 'Generate the reverse complement of a DNA sequence.', 'sequence_tools.reverse_complement("ATGCGT")'], ['find_motifs(sequence, motif)', 'Find all occurrences of a motif pattern in a sequence.', 'sequence_tools.find_motifs("ATGCGCGCTA", "GC")'], ['translate(sequence, frame=0)', 'Translate DNA sequence to amino acid sequence.', 'sequence_tools.translate("ATGAAATAG")']]],
  ['genomic-parsers', 'genomic_parsers Module', [['parse_fasta(filename)', 'Parse FASTA files and yield header-sequence pairs.', 'for header, sequence in genomic_parsers.parse_fasta("sequences.fasta")'], ['parse_fastq(filename)', 'Parse FASTQ files with quality scores.', 'for record in genomic_parsers.parse_fastq("reads.fastq")'], ['parse_vcf(filename)', 'Parse VCF (Variant Call Format) files.', 'for variant in genomic_parsers.parse_vcf("variants.vcf")']]],
  ['ml-tools', 'ml_tools Module', [['extract_features(sequences, method="kmer")', 'Extract numerical features from biological sequences.', 'features = ml_tools.extract_features(sequences, method="kmer")'], ['SequenceClassifier()', 'Machine learning classifier for biological sequences.', 'classifier.fit(features, labels)\npredictions = classifier.predict(new_features)']]],
];

export function DocumentationScreen() {
  const [active, setActive] = useState('installation');
  const navItems = [['installation', 'Installation'], ['requirements', 'Requirements'], ['quick-start', 'Quick Start'], ...apiSections.map(([id, title]) => [id, title]), ['basic-analysis', 'Tutorials'], ['troubleshooting', 'Troubleshooting'], ['contributing', 'Contributing']];
  return <div className="min-h-screen bg-slate-50 text-slate-900"><Header documentation /><div className="mx-auto flex max-w-7xl pt-16"><aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto bg-white p-5 md:block"><nav className="grid gap-1">{navItems.map(([id, title]) => <a key={id} href={`#${id}`} className={`rounded-md px-3 py-2 text-sm ${active === id ? 'bg-blue-50 font-semibold text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`} onClick={() => setActive(id)}>{title}</a>)}</nav></aside><main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10"><div className="mb-12 flex items-start gap-4"><img src={logo} alt="GenomeHouse logo" className="h-14 w-14 object-contain" /><div><h1 className="text-3xl font-bold gradient-text sm:text-4xl">GenomeHouse Documentation</h1><p className="mt-2 text-lg text-slate-600">Complete guide to the modular bioinformatics toolkit</p></div></div><div className="mb-10 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-800"><strong>Latest Version: 1.2.0</strong><p className="mt-1 text-sm">This documentation covers all features available in the latest release.</p></div><DocSection id="installation" title="Installation"><DocCard title="Install from PyPI" code="pip install genomehouse" /><DocCard title="Install from Source" code={'git clone https://github.com/GenomeHouse/GenomeHouse-1.1.git\ncd GenomeHouse-1.1\npip install -e .'} /></DocSection><DocSection id="requirements" title="Requirements"><div className="grid gap-6 md:grid-cols-2"><InfoCard title="Python Requirements"><ul className="space-y-2 text-slate-600"><li>✓ Python ≥ 3.8</li><li>✓ NumPy ≥ 1.19.0</li><li>✓ Pandas ≥ 1.3.0</li></ul></InfoCard><InfoCard title="Optional Dependencies"><ul className="space-y-2 text-slate-600"><li>• Matplotlib (visualization)</li><li>• Scikit-learn (ML features)</li><li>• Seaborn (advanced plots)</li></ul></InfoCard></div></DocSection><DocSection id="quick-start" title="Quick Start"><DocCard title="Basic workflow" code={'from genomehouse import sequence_tools, genomic_parsers\n\nseq = "ATGCGTACGGCTA"\ngc_content = sequence_tools.gc_content(seq)\nprint(f"GC Content: {gc_content}%")\n\nfor header, sequence in genomic_parsers.parse_fasta("example.fasta"):\n    print(header, len(sequence))'} /></DocSection>{apiSections.map(([id, title, entries]) => <DocSection key={id} id={id} title={title}>{entries.map(([name, description, code]) => <DocCard key={name} title={name} description={description} code={`# Example usage\n${code}`} />)}</DocSection>)}<DocSection id="basic-analysis" title="Tutorials"><DocCard title="Basic Sequence Analysis" description="Use GenomeHouse to calculate GC content, generate reverse complements, translate sequences, and find motifs." code={'from genomehouse import sequence_tools\n\ndna_sequence = "ATGAAACGCATTAGCACCACCATTACCACCACCATCACCATTACCACAGGTAACGGTGCGGGCTGA"\ngc_content = sequence_tools.gc_content(dna_sequence)\nprotein = sequence_tools.translate(dna_sequence)\nprint(f"GC content: {gc_content:.1f}%")\nprint(f"Protein: {protein}")'} /></DocSection><DocSection id="troubleshooting" title="Troubleshooting"><InfoCard title="Common Issues"><div className="space-y-4 text-slate-600"><p><strong className="text-red-700">ImportError:</strong> Install the package with <code>pip install genomehouse</code>.</p><p><strong className="text-yellow-700">FileNotFoundError:</strong> Check that the file path is correct and the file exists.</p><p><strong className="text-blue-700">Memory issues:</strong> Process very large files in chunks or use the CLI tools.</p></div></InfoCard></DocSection><DocSection id="contributing" title="Contributing"><InfoCard title="Development Setup"><p className="mb-4 text-slate-600">We welcome contributions to GenomeHouse.</p><DocCard title="Commands" code={'git clone https://github.com/GenomeHouse/GenomeHouse-1.1.git\ncd GenomeHouse-1.1\npip install -e .[dev]\npytest tests/'} /></InfoCard></DocSection></main></div><Footer /></div>;
}

function DocSection({ id, title, children }) { return <section id={id} className="mb-12 scroll-mt-24"><h2 className="mb-6 text-2xl font-bold sm:text-3xl">{title}</h2>{children}</section>; }
function DocCard({ title, description, code }) { return <article className="mb-6 rounded-lg bg-white p-5 shadow-sm sm:p-6"><h3 className="mb-3 text-lg font-semibold">{title}</h3>{description && <p className="mb-4 text-slate-600">{description}</p>}<div className="relative"><pre className="overflow-x-auto rounded-lg bg-slate-800 p-4 text-xs leading-6 text-emerald-300 sm:text-sm"><code>{code}</code></pre><div className="absolute right-2 top-2"><CopyButton text={code} /></div></div></article>; }
