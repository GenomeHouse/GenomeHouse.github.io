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
      window.setTimeout(() => setCopied(false), 1400);
    } catch {}
  }
  return <button className="copy-button" onClick={copy} aria-label="Copy code">{copied ? 'Copied' : 'Copy'}</button>;
}

function Header({ documentation = false }) {
  const [open, setOpen] = useState(false);
  const links = documentation
    ? [['Overview', '#overview'], ['Installation', '#installation'], ['API reference', '#sequence-tools'], ['Tutorials', '#basic-analysis']]
    : [['Platform', '#features'], ['Installation', '#installation'], ['Examples', '#examples'], ['Documentation', '/documentation']];
  return <>
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href={documentation ? '/' : '#top'}><img src={logo} alt="GenomeHouse logo" /><span>GenomeHouse</span></a>
        <nav className="desktop-nav">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <div className="header-actions"><a className="button button-quiet" href={pypiUrl} target="_blank" rel="noreferrer">PyPI <span className="button-arrow">↗</span></a><a className="button button-dark" href={repoUrl} target="_blank" rel="noreferrer">GitHub <span className="button-arrow">↗</span></a><button className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation">☰</button></div>
      </div>
    </header>
    {open && <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)}><aside className="mobile-drawer" onClick={(event) => event.stopPropagation()}><div className="drawer-head"><span className="eyebrow">GenomeHouse</span><button onClick={() => setOpen(false)} aria-label="Close navigation">×</button></div><nav>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}</nav><div className="drawer-links"><a href={pypiUrl} target="_blank" rel="noreferrer">Open package page ↗</a><a href={repoUrl} target="_blank" rel="noreferrer">Explore source ↗</a></div></aside></div>}
  </>;
}

function SectionLabel({ children, number }) { return <div className="section-label"><span>{number}</span>{children}</div>; }
function SectionHeading({ title, subtitle }) { return <div className="section-heading"><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>; }

const features = [
  ['01', 'Sequence analysis', 'Work directly with DNA and RNA sequences using predictable, composable primitives.', 'GC content, motif search, reverse complement, translation'],
  ['02', 'Genomic parsing', 'Stream standard research formats without forcing whole files into memory.', 'FASTA, FASTQ, VCF, GFF/GTF'],
  ['03', 'Machine learning', 'Move from biological sequences to useful features and baseline models quickly.', 'Feature extraction, classification, clustering'],
  ['04', 'Visualization', 'Create publication-ready views for genomic and biological data.', 'Alignments, phylogenies, statistical charts'],
  ['05', 'Statistics', 'Turn exploratory measurements into reproducible analysis workflows.', 'Hypothesis tests, correlations, distributions'],
  ['06', 'Extensible API', 'Compose the toolkit around your own pipelines and research conventions.', 'Modular architecture, plugins, custom workflows'],
];

const examples = [
  ['Sequence analysis', 'sequence_tools', 'from genomehouse import sequence_tools\n\nseq = "ATGCGTACGGCTA"\ngc_content = sequence_tools.gc_content(seq)\nprint(f"GC Content: {gc_content}%")'],
  ['File parsing', 'genomic_parsers', 'from genomehouse import genomic_parsers\n\nfor header, sequence in genomic_parsers.parse_fasta("data.fasta"):\n    print(f">{header}")\n    print(f"Length: {len(sequence)}")'],
  ['CLI workflows', 'genomehouse-cli', 'genomehouse-cli parse-fasta data/sample.fasta\ngenomehouse-cli gc-content ATGCGTAC'],
];

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
