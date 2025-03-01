package cache

import (
	"context"
)

type Cache[T any] interface {
	// Get returns the value for the given key.
	// If the key is not found, found will be false.
	Get(ctx context.Context, key string) (value T, hit CacheHit)

	// Sets the value for the given key.
	Set(ctx context.Context, key string, value T)

	// Sets the given key to null, indicating that the value does not exist in the origin.
	SetNull(ctx context.Context, key string)

	// Removes the key from the cache.
	Remove(ctx context.Context, key string)
}

type CacheHit int

const (
	Null CacheHit = iota
	// The entry was in the cache and can be used
	Hit
	// The entry was not in the cache
	Miss
	// The entry did not exist in the origin

)
