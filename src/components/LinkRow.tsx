import React from "react";
import { IconRow, FAIcon, PlainA } from "./style";

import {
  faKeybase,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LinkRow = () => (
  <IconRow>
    <Icon href="mailto:c@cwb.dk" icon={faEnvelope} />
    <Icon href="https://keybase.io/cabang" icon={faKeybase} />
    <Icon href="https://github.com/C0DK/" icon={faGithub} />
    <Icon href="https://www.linkedin.com/in/cabang/" icon={faLinkedin} />
    <Icon href="https://twitter.com/cabang_dk/" icon={faTwitter} />
  </IconRow>
);

const Icon = ({ href, icon }: { href: string; icon: any }) => (
  <PlainA href={href} target="_blank">
    <FAIcon icon={icon} size="2x" />
  </PlainA>
);

export default LinkRow;