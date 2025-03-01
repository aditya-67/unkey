// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.20.0
// source: key_delete.sql

package database

import (
	"context"
)

const deleteKey = `-- name: DeleteKey :exec
DELETE FROM ` + "`" + `keys` + "`" + ` WHERE id = ?
`

func (q *Queries) DeleteKey(ctx context.Context, id string) error {
	_, err := q.db.ExecContext(ctx, deleteKey, id)
	return err
}
