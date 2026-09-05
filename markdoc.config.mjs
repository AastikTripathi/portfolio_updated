// markdoc.config.mjs
import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    table: {
      render: 'table',
    },
    youtube: {
      render: component('./src/components/Embed.astro'),
      selfClosing: true,
      attributes: {
        id: { type: String },
        url: { type: String },
        title: { type: String, default: 'YouTube Video' },
        type: { type: String, default: 'youtube' },
      },
    },
    wolfram: {
      render: component('./src/components/Embed.astro'),
      selfClosing: true,
      attributes: {
        id: { type: String },
        query: { type: String },
        title: { type: String, default: 'Wolfram Alpha Interactive Demo' },
        type: { type: String, default: 'wolfram' },
      },
    },
    geogebra: {
      render: component('./src/components/Embed.astro'),
      selfClosing: true,
      attributes: {
        id: { type: String, required: true },
        title: { type: String, default: 'GeoGebra Interactive Applet' },
        type: { type: String, default: 'geogebra' },
      },
    },
    audio: {
      render: component('./src/components/Embed.astro'),
      selfClosing: true,
      attributes: {
        url: { type: String },
        id: { type: String },
        title: { type: String, default: 'Audio Explanation' },
        type: { type: String, default: 'audio' },
      },
    },
    tikz: {
      render: component('./src/components/TikzDiagram.astro'),
      attributes: {
        code: { type: String },
        caption: { type: String },
      },
    },
  },
});
