<?php
declare(strict_types=1);

// GeoadminSearch SDK configuration

class GeoadminSearchConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "GeoadminSearch",
                "slug" => "geoadmin-search",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api3.geo.admin.ch",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "search" => [],
                ],
            ],
            "entity" => [
        'search' => [
          'fields' => [
            [
              'name' => 'results',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'search',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => '551306.5625,167918.328125,551754.125,168514.625',
                        'kind' => 'query',
                        'name' => 'bbox',
                        'orig' => 'bbox',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'callback',
                        'orig' => 'callback',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'ch.bafu.hydrologie-gewaesserzustandsmessstationen',
                        'kind' => 'query',
                        'name' => 'feature',
                        'orig' => 'feature',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'geometry_format',
                        'orig' => 'geometry_format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'de',
                        'kind' => 'query',
                        'name' => 'lang',
                        'orig' => 'lang',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'address,gazetteer',
                        'kind' => 'query',
                        'name' => 'origin',
                        'orig' => 'origin',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'return_geometry',
                        'orig' => 'return_geometry',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 'wabern',
                        'kind' => 'query',
                        'name' => 'search_text',
                        'orig' => 'search_text',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'sortbbox',
                        'orig' => 'sortbbox',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => '21781',
                        'kind' => 'query',
                        'name' => 'sr',
                        'orig' => 'sr',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'locations',
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/rest/services/ech/SearchServer',
                  'segments' => [
                    [
                      'lit' => 'rest',
                    ],
                    [
                      'lit' => 'services',
                    ],
                    [
                      'lit' => 'ech',
                    ],
                    [
                      'lit' => 'SearchServer',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'bbox',
                      'callback',
                      'feature',
                      'geometry_format',
                      'lang',
                      'limit',
                      'origin',
                      'return_geometry',
                      'search_text',
                      'sortbbox',
                      'sr',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'rest',
                    'services',
                    'ech',
                    'SearchServer',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return GeoadminSearchFeatures::make_feature($name);
    }
}
