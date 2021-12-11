(module
    (export "memory" (memory $memory))
    (export "createCarpet" (func $create_carpet))

    (memory $memory 16)

    (func $create_carpet
        (local $i i32)
        (loop $loop_start
            (i32.store
                (i32.mul (local.get $i) (i32.const 4))
                (i32.and
                    (i32.mul
                        (i32.mul (local.get $i) (local.get $i))
                        (i32.const 16777280)
                    )
                    (i32.const 4278190080)
                )
            )
            (local.set $i (i32.add (local.get $i) (i32.const 1)))
            (br_if $loop_start
                (i32.le_u (local.get $i) (i32.const 262143))
            )
        )
    )
)
