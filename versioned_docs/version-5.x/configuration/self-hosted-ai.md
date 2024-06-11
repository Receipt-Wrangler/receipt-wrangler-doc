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

## Ollama

Ollama is by far the easiest LLM to set up and get running and it is the recommended option for self-hosted.

It is meant
to be made easy to run, so model parameters are
preset for
ease of use. Ollama is FOSS, and runs very well on hardware with low VRAM, such as an RTX 3060ti which has 8gb of VRAM.
It can still run llama3 8b models, with good results.

Take a look at [Ollama's Github page](https://github.com/ollama/ollama) to set it up, and then follow the
[Receipt Wrangler](/docs/concepts/system-settings/receipt-processing-settings)
documentation to configure it.

## LLM Configuration

Receipt Wrangler has been tested with an RTX 3060Ti using LM Studio on Ubuntu 22.04.4 LTS (Virtualized) with Mistral 7B
Instruct models with pretty good results, however, it should be considered the bare minimum due to the low amount of
VRAM. The context length can be large with use in Receipt Wrangler, so the more VRAM the better. Somewhere between 8gb
and 16gb should be sufficient.

Anything with similar or better specs should work well. As far as models go, it is recommended to try different models
to see which one works
best.

If using a GPU with low VRAM, it is recommended to use smaller models, such as 8b models, and smaller.



