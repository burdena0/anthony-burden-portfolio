export const projects = [
  {
    slug: 'webots-vision', n: '01', category: 'Robot perception', title: 'Webots Neural Vision Robot', short: 'Webots Neural Vision Robot', tech: 'Python / PyTorch / OpenCV / Webots', repo: 'webots-epuck-vision-tracking',
    intro: 'A small e-puck robot that finds a selected color, turns toward it, and stops as it approaches. I compared a compact neural network with a calibrated HSV baseline to understand where each approach works.',
    metric: '108', metricLabel: 'paired simulation trials', image: 'webots-targets.png', alt: 'Three actual Webots camera frames alongside predicted masks for red, blue, and green targets.',
    caption: 'Selected-target camera frames and predicted masks. Generated scenes; Webots simulation.',
    lead: 'Vision methods and robot behavior',
    built: 'I started with color thresholding, then trained a 1,460-parameter CNN on 3,000 labeled synthetic images. Both detectors feed the same steering and stopping controller. The robot uses camera frames and proximity sensors; supervisor positions score the trials but never steer it.',
    result: 'The selected-target model reached 98.13% macro mask IoU on 400 held-out synthetic scenes. A separate comparison covered 3,600 fresh synthetic images and 108 paired Webots trials, measuring perception quality, CPU latency, and task completion.',
    lesson: 'HSV handles clean colors and near-color clutter well. The CNN performed better on blurred images; the dim-light difference was uncertain. Looking at robot outcomes alongside image metrics made the tradeoffs clearer.',
    limits: 'All results come from generated images and simulation. The controller stops for obstacles but does not plan a route around them. Selecting one object among several of the same color remains a limitation; a physical robot has not been tested.',
    sources: [['Image evaluation', 'reports/perception_audit/results.json'], ['Robot evaluation', 'reports/closed_loop_verified/summary.json']],
    facts: [['1,460', 'model parameters'], ['3,000', 'training images'], ['98.13%', 'held-out macro mask IoU']]
  },
  {
    slug: 'camera-tracker', n: '02', category: 'Vision & control', title: 'Pan/Tilt Camera Tracking Simulation', short: 'Pan/Tilt Camera Tracking Simulation', tech: 'Python / PyTorch / MuJoCo / C', repo: 'pan-tilt-camera-tracker',
    intro: 'A two-axis camera tracking moving drone geometry in MuJoCo. Rendered camera frames feed day/night vision models, an object tracker, and a controller that moves both simulated joints.',
    metric: '2.04 px', metricLabel: 'nominal mean centering error', image: 'camera-tracker.png', video: 'camera-tracker.mp4', alt: 'Recorded MuJoCo camera tracker with pan/tilt assembly, camera view, and neural prediction.',
    caption: 'Recorded nominal run in MuJoCo. Synthetic geometry and camera images.',
    lead: 'Camera tracking pipeline',
    built: 'I connected segmentation and crop-classification models with a Kalman tracker and camera-rotation compensation. The simulated controller moves both axes to center a selected target. Scenarios include distractors, occlusion, lost frames, low light, and motion blur. A host build also exercises the C command parser and watchdog.',
    result: 'In the recorded nominal daytime scenario, mean centering error fell from 44.40 pixels with a fixed camera to 2.04 pixels with tracking, a 95.4% reduction. The evaluation covers 16 scenarios; this result describes the nominal comparison, not every condition.',
    lesson: 'Dim and defocused scenes can lose tracking. Fast night motion reaches the pan-speed limit, and the combined spotlight/short-exposure scenario did not improve mean error over its comparison. Those failures matter as much as the nominal result.',
    limits: 'This is a simulation project using synthetic training data. Real-camera detection and physical hardware operation are unverified. Joint placement, mass, friction, and motor response are estimates. ESP32 firmware is included for a future physical build.',
    sources: [['Recorded results', 'reports/vision_simulation.json'], ['Acceptance checks', 'reports/acceptance.json']],
    facts: [['44.40 → 2.04 px', 'nominal mean error'], ['16', 'evaluation scenarios'], ['Simulation', 'validation domain']]
  },
  {
    slug: 'life-tracker', n: '03', category: 'Embedded systems', title: 'Flesh and Blood Life Tracker', short: 'Flesh and Blood Life Tracker', tech: 'C++ / ESP-IDF / FreeRTOS / KiCad', repo: 'flesh-and-blood-life-tracker',
    intro: 'An ESP32-S3 life and resource counter with a custom 70 × 80 mm carrier PCB, debounced controls, undo, reset confirmation, and multiplexed display output.',
    lead: 'Firmware and PCB design',
    built: 'The compact design uses an ESP32-S3-Zero, a four-digit common-cathode display, and an SN74HC595 shift register. Firmware runs on ESP-IDF and FreeRTOS. The repository includes an editable two-layer KiCad board, schematic, BOM, and GPIO map.',
    result: 'Host tests verify game-state and shift-register behavior. Separate breadboard checks cover connectivity and pin mapping. The counter supports two players, 20 or 40 starting life, resources, undo, and reset confirmation.',
    lesson: 'Explicit state ownership and debounced input events keep display updates and game logic easier to reason about. Undo and reset confirmation are part of the interface rather than afterthoughts.',
    limits: 'Host tests and breadboard connectivity checks do not establish full assembled-board operation. Full hardware commissioning remains a separate validation step.',
    sources: [['Firmware & board files', '']], facts: [['ESP32-S3', 'microcontroller'], ['70 × 80 mm', 'two-layer carrier board'], ['FreeRTOS', 'firmware runtime']]
  },
  {
    slug: 'local-inference', n: '04', category: 'Applied software', title: 'Local LLM Inference & Discord Bot', short: 'Local LLM Inference & Discord Bot', tech: 'Python / Ollama / SQLite / Async I/O', repo: 'discord-inference-bot',
    intro: 'A Discord interface for local model inference, with streaming replies, recent channel context, embedding-based retrieval, and timing instrumentation.',
    lead: 'Inference, retrieval, and timing',
    built: 'I integrated Ollama with an asynchronous Python bot and SQLite-backed history retrieval. The bot streams responses and retrieves indexed context from the channel receiving the reply. It includes model controls and permission checks.',
    result: 'Time-to-first-token and generation-speed instrumentation make it possible to inspect local inference performance. The project exposes latency and model metrics alongside controls for loading, unloading, and selecting models.',
    lesson: 'Model choice, available memory, and context length all affect responsiveness. Instrumentation is more useful than assuming that a local model will feel fast enough in conversation.',
    limits: 'This is a hobby project for private servers with informed participant consent. Response quality and throughput depend on the model and hardware. Consent is an operator requirement; the bot does not track it automatically.',
    sources: [['Implementation & limitations', '']], facts: [['Streaming', 'response delivery'], ['SQLite', 'history & retrieval'], ['TTFT', 'latency instrumentation']]
  }
];
