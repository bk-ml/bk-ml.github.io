export default function ProjectSection() {
  return (
    <>
      <VoiceAISection />
      <SupplyChainMCPSection />
    </>
  );
}

export function VoiceAISection() {
  return (
    <div className="card projectCard">
      <div className="projectHeader">
        <h3>Real-time Voice AI Agent (RTX 5090)</h3>
        <div className="projectLinks">
          <a
            href="https://github.com/bk-ml/qwen_megakernel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://github.com/bk-ml/qwen_megakernel/blob/master/output.wav"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>
      </div>

      <p className="muted">
        End-to-end streaming voice system: Whisper STT → Megakernel LLM → Qwen
        TTS with real-time GPU inference.
      </p>

      <div className="metricBar">
        <div className="metric">
          <span className="metricValue">1037</span>
          <span className="metricLabel">tok/s</span>
        </div>
        <div className="metric">
          <span className="metricValue">8.4×</span>
          <span className="metricLabel">vs PyTorch</span>
        </div>
        <div className="metric metricText">RTX 5090 optimized</div>
      </div>

      <div className="projectBody">
        <div className="column">
          <div className="columnLabel">Stack</div>
          <div className="tags">
            <span className="tagPrimary">CUDA</span>
            <span className="tagPrimary">FastAPI</span>
            <span className="tagPrimary">Streaming</span>
            <span className="tagPrimary">WebSockets</span>
            <span className="tagSecondary">Qwen</span>
          </div>
        </div>
        <div className="column">
          <div className="columnLabel">Highlights</div>
          <ul>
            <li>Full-duplex pipeline (Audio → STT → LLM → TTS → Audio)</li>
            <li>SSE + WebSocket streaming architecture</li>
            <li>TTS bottleneck analysis (RTF 1.84, TTFC 3675ms)</li>
            <li>Production debugging: VAD loop, model loading, proxy issues</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SupplyChainMCPSection() {
  return (
    <>
      <div className="card projectCard">
        <div className="projectHeader">
          <h3>Supply-Chain Risk MCP Server & Multi-Agent PR Reviewer</h3>
          <div className="projectLinks">
            <a
              href="https://github.com/bk-ml/supply-chain-risk-mcp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className="muted">
          MCP server assessing open-source dependency risk (CVEs, license
          conflicts, maintenance health) across npm, PyPI, Cargo, and Maven —
          plus a 3-agent system that reviews a PR's dependency changes
          end-to-end over the real MCP protocol.
        </p>

        <div className="metricBar">
          <div className="metric">
            <span className="metricValue">5+1</span>
            <span className="metricLabel">tools + resource</span>
          </div>
          <div className="metric">
            <span className="metricValue">75</span>
            <span className="metricLabel">tests (unit + integration)</span>
          </div>
          <div className="metric">
            <span className="metricValue">18</span>
            <span className="metricLabel">live-API eval cases</span>
          </div>
        </div>

        <div className="projectBody">
          <div className="column">
            <div className="columnLabel">Stack</div>
            <div className="tags">
              <span className="tagPrimary">Python</span>
              <span className="tagPrimary">MCP SDK</span>
              <span className="tagPrimary">asyncio</span>
              <span className="tagPrimary">pydantic</span>
              <span className="tagSecondary">Gemini API</span>
            </div>
          </div>
          <div className="column">
            <div className="columnLabel">Highlights</div>
            <ul>
              <li>
                Composite risk score with severity-escalation rule (not a naive
                weighted average)
              </li>
              <li>
                3-agent system (Triage → Research → Synthesis) over the real MCP
                protocol, not a direct import
              </li>
              <li>
                Hand-written orchestration, swappable LLM backend, no agent
                framework
              </li>
              <li>
                Live-API eval suite caught an OSV.dev ecosystem-naming bug mocks
                had missed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
