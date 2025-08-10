<p align="center">
	<img src="media/genome-house.png" alt="GenomeHouse Logo" width="120" />
</p>

# GenomeHouse

<p align="center">
	<b>Modular Bioinformatics Toolkit for Sequence Analysis, Parsing, ML, and Visualization</b>
</p>

<p align="center">
	<a href="https://pypi.org/project/genomehouse/">
		<img src="https://img.shields.io/pypi/v/genomehouse.svg?color=2563eb" alt="PyPI Version">
	</a>
	<img src="https://img.shields.io/pypi/pyversions/genomehouse.svg?color=60a5fa" alt="Python Versions">
	<img src="https://img.shields.io/pypi/l/genomehouse.svg?color=1e40af" alt="License">
	<a href="https://github.com/GenomeHouse/GenomeHouse.github.io">
		<img src="https://img.shields.io/github/stars/GenomeHouse/GenomeHouse.github.io?style=social" alt="GitHub Stars">
	</a>
</p>

---

## 🚀 Installation

```bash
pip install genomehouse
```

## 🧬 Features

- **Sequence Analysis**: Reverse complement, motif search, GC content, translation
- **Data Parsing**: FASTA/FASTQ, VCF, GFF/GTF, memory-efficient streaming
- **Machine Learning**: Feature extraction, classification, clustering, cross-validation
- **Visualization**: Alignment plots, phylogenetic trees, statistical charts, interactive visualizations
- **Statistical Analysis**: Hypothesis testing, correlation, distribution fitting, significance testing
- **Extensible API**: Modular architecture, plugin system, custom workflows

## 📦 Requirements

- Python ≥3.8
- NumPy, Pandas
- Matplotlib, Seaborn
- Scikit-learn

## 📝 Quick Start

```python
from genomehouse import sequence_tools

# Calculate GC content
seq = "ATGCGTACGGCTA"
gc_content = sequence_tools.gc_content(seq)
print(f"GC Content: {gc_content}%")

# Get reverse complement
rev_comp = sequence_tools.reverse_complement(seq)
print(f"Reverse Complement: {rev_comp}")

# Find motifs
motifs = sequence_tools.find_motifs(seq, "GC")
print(f"GC motifs found at: {motifs}")
```

## 💻 CLI Usage

```bash
# Parse FASTA file
genomehouse-cli parse-fasta data/sample.fasta

# Calculate GC content
genomehouse-cli gc-content ATGCGTAC

# Convert FASTQ to FASTA
genomehouse-cli convert reads.fastq output.fasta

# Generate sequence statistics
genomehouse-cli stats genome.fasta
```

## 📚 Documentation & Resources

- [PyPI Package](https://pypi.org/project/genomehouse/)
- [API Documentation](#)
- [GitHub Repository](https://github.com/GenomeHouse/GenomeHouse.github.io)
- [Tutorials](#)
- [Examples](#)

---

<p align="center">
	Built with ❤️ for the bioinformatics community by <a href="https://orcid.org/0009-0006-0222-7585" target="_blank">Mubashir Ali</a> and <a href="https://orcid.org/0009-0006-0222-7585" target="_blank">CelloByte Team</a>
</p>
