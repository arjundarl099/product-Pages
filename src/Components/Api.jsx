import React, { useEffect, useState } from 'react';

const FONT_IMPORT_ID = 'ledger-fonts';

const Api = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [query, setQuery] = useState('');

  // Inject display + mono fonts once
  useEffect(() => {
    if (document.getElementById(FONT_IMPORT_ID)) return;
    const link = document.createElement('link');
    link.id = FONT_IMPORT_ID;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;500&display=swap';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then((data) => {
        setMyProducts(data.products || []);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []); // empty array — fetch once on mount, not on every state change

  const filtered = myProducts.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  const maxStock = Math.max(...myProducts.map((p) => p.stock), 1);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#EFEBE2',
        color: '#211F1C',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Header / manifest strip */}
      <header
        style={{
          borderBottom: '2px solid #211F1C',
          padding: '28px 32px 20px',
          position: 'sticky',
          top: 0,
          background: '#EFEBE2',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '16px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#8A5A3E',
                margin: '0 0 6px',
              }}
            >
              Stock manifest — dummyjson.com
            </p>
            <h1
              style={{
                fontSize: '32px',
                fontWeight: 700,
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              Product ledger
            </h1>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                color: '#6B6862',
                margin: 0,
              }}
            >
              {status === 'ready'
                ? `${filtered.length} of ${myProducts.length} items listed`
                : status === 'loading'
                ? 'reading manifest…'
                : 'manifest unavailable'}
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '18px auto 0' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the ledger by item name…"
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '10px 14px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '14px',
              background: '#F7F4EC',
              border: '1.5px solid #211F1C',
              borderRadius: '2px',
              outline: 'none',
              color: '#211F1C',
            }}
          />
        </div>
      </header>

      {/* Body */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '28px 32px 64px' }}>
        {status === 'loading' && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#6B6862' }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px' }}>
              Fetching stock records…
            </p>
          </div>
        )}

        {status === 'error' && (
          <div
            style={{
              textAlign: 'center',
              padding: '48px 24px',
              border: '1.5px dashed #B0522D',
              color: '#8A3A20',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '14px',
            }}
          >
            Couldn't reach the manifest. Check the connection and refresh.
          </div>
        )}

        {status === 'ready' && filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 0', color: '#6B6862' }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px' }}>
              No items match "{query}".
            </p>
          </div>
        )}

        {status === 'ready' && filtered.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
              gap: '18px',
            }}
          >
            {filtered.map((pro) => {
              const stockPct = Math.round((pro.stock / maxStock) * 100);
              return (
                <div
                  key={pro.id}
                  style={{
                    background: '#F7F4EC',
                    border: '1.5px solid #211F1C',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Image block with SKU tag */}
                  <div
                    style={{
                      position: 'relative',
                      background: '#E4DFD1',
                      aspectRatio: '1 / 1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={pro.thumbnail}
                      alt={pro.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '10px',
                        letterSpacing: '0.06em',
                        background: '#211F1C',
                        color: '#EFEBE2',
                        padding: '3px 6px',
                        borderRadius: '2px',
                      }}
                    >
                      #{String(pro.id).padStart(4, '0')}
                    </span>
                  </div>

                  {/* Details */}
                  <div style={{ padding: '14px 14px 16px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                    <p
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '10px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#8A5A3E',
                        margin: 0,
                      }}
                    >
                      {pro.category}
                    </p>
                    <h3
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {pro.title}
                    </h3>

                    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <p
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '18px',
                          fontWeight: 500,
                          color: '#B0522D',
                          margin: 0,
                        }}
                      >
                        ${pro.price}
                      </p>

                      {/* Stock level bar — real data, not decoration */}
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '10px',
                            color: '#6B6862',
                            marginBottom: '3px',
                          }}
                        >
                          <span>stock</span>
                          <span>{pro.stock}</span>
                        </div>
                        <div
                          style={{
                            height: '4px',
                            background: '#DDD6C4',
                            borderRadius: '2px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              height: '100%',
                              width: `${stockPct}%`,
                              background: pro.stock > 0 ? '#3F5D42' : '#B0522D',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default Api;