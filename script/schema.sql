CREATE TABLE ops (
  collection character varying(255) not null,
  doc_id character varying(255) not null,
  version integer not null,
  operation text not null, -- {v:0, create:{...}} or {v:n, op:[...]}
  PRIMARY KEY (collection, doc_id, version)
);

CREATE TABLE snapshots (
  collection character varying(255) not null,
  doc_id character varying(255) not null,
  doc_type character varying(255) not null,
  version integer not null,
  data text not null,
  PRIMARY KEY (collection, doc_id)
);