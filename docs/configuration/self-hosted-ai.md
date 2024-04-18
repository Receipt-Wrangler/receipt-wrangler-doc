# Self-hosted AI

Receipt Wrangler can be configured to use a locally hosted LLM (Large Language Model) server that is OpenAI Compliant,
instead of OpenAI or
Gemini.
This way, users can have more control over the model used, the hardware involved, and of course, privacy.

Below we'll go over some recommendations for setting up a locally hosted LLM server.

## AI Server

:::warning

Some LLM servers do not allow for listening on all network interfaces (localhost only), such as GPT4All.  
This will only be an issue if the AI server is on a different machine than the Receipt Wrangler server, so we will want
to
keep this in mind as we chose what server to use.

:::

The recommended server is [LM Studio](https://lmstudio.ai/).

LM Studio is free, and the server is very easy to use. Out of the box, it listens on all network interfaces.

To set up LM Studio for use in Receipt Wrangler:

1. Download and install LM Studio on the machine you want to run the AI model on.
2. Download the model you want to use.
3. Load the model you want to use in LM Studio.
4. Navigate to the local server page by clicking the local server on the sidebar.
5. Turn formatted responses off.
6. Start server.
7. In your `config.prod.json` file, set the `aiSettings.type` to `openAiCustom`, and optionally set `model`.
8. Set the `aiSettings.url` to the URL of the LM Studio server (f.ex http://192.168.0.1:1234/v1/chat/completions).

In general this process will be practically the same for every other AI server, but the specifics will vary.
For some alternatives, take a look at https://github.com/premAI-io/state-of-open-source-ai/blob/main/desktop-apps.md

## LLM Configuration

Receipt Wrangler has been tested with an RTX 3060Ti using LM Studio on Ubuntu 22.04.4 LTS (Virtualized) with Mistral 7B
Instruct models with pretty good results, however, it should be considered the bare minimum due to the low amount of
VRAM. The context length can be large with use in Receipt Wrangler, so the more VRAM the better. Somewhere between 8gb
and 16gb should be sufficient.

Anything with similar or better specs should work well. As far as models go, it is recommended to try different models
to see which one works
best.

Google Gemma 2b models are also an excellent choice, for fast inference and are great for GPUs with low VRAM. Gemma
models are
available in LM Studio with presets as well.



